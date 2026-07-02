const nodemailer = require("nodemailer");
const fs = require("fs").promises;
const path = require("path");

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: process.env.EMAIL_PORT || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  // Load and populate email template
  async loadTemplate(templateName, data) {
    try {
      const templatePath = path.join(
        __dirname,
        "../templates",
        `${templateName}.html`
      );
      let template = await fs.readFile(templatePath, "utf-8");

      // Replace placeholders with actual data
      Object.keys(data).forEach((key) => {
        const placeholder = new RegExp(`{{${key}}}`, "g");
        template = template.replace(placeholder, data[key] || "");
      });

      return template;
    } catch (error) {
      console.error("Error loading email template:", error);
      throw error;
    }
  }

  // Send reservation confirmation
  async sendReservationConfirmation(reservation) {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("⚠️  Email service not configured. Skipping email send.");
      return;
    }

    try {
      const templateData = {
        fullName: reservation.fullName,
        confirmationCode: reservation.confirmationCode,
        date: new Date(reservation.reservationDate).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: reservation.reservationTime,
        guests: reservation.guests,
        tableNumber: reservation.tableNumber || "TBA",
        occasion: reservation.occasion,
        specialRequests: reservation.specialRequests || "None",
      };

      const html = await this.loadTemplate("reservationConfirmation", templateData);

      await this.transporter.sendMail({
        from: `"Spice Garden Restaurant" <${process.env.EMAIL_USER}>`,
        to: reservation.email,
        subject: "Reservation Confirmation - Spice Garden",
        html: html,
      });

      console.log(`✅ Confirmation email sent to ${reservation.email}`);
    } catch (error) {
      console.error("Error sending confirmation email:", error);
      // Don't throw error - reservation should still be created
    }
  }

  // Send reservation cancelled email
  async sendReservationCancelled(reservation) {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("⚠️  Email service not configured. Skipping email send.");
      return;
    }

    try {
      const templateData = {
        fullName: reservation.fullName,
        confirmationCode: reservation.confirmationCode,
        date: new Date(reservation.reservationDate).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: reservation.reservationTime,
      };

      const html = await this.loadTemplate("reservationCancelled", templateData);

      await this.transporter.sendMail({
        from: `"Spice Garden Restaurant" <${process.env.EMAIL_USER}>`,
        to: reservation.email,
        subject: "Reservation Cancelled - Spice Garden",
        html: html,
      });

      console.log(`✅ Cancellation email sent to ${reservation.email}`);
    } catch (error) {
      console.error("Error sending cancellation email:", error);
    }
  }

  // Send reservation reminder
  async sendReservationReminder(reservation) {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return;
    }

    try {
      const templateData = {
        fullName: reservation.fullName,
        date: new Date(reservation.reservationDate).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: reservation.reservationTime,
        guests: reservation.guests,
        tableNumber: reservation.tableNumber || "TBA",
      };

      const html = await this.loadTemplate("reservationReminder", templateData);

      await this.transporter.sendMail({
        from: `"Spice Garden Restaurant" <${process.env.EMAIL_USER}>`,
        to: reservation.email,
        subject: "Reservation Reminder - Tomorrow - Spice Garden",
        html: html,
      });

      console.log(`✅ Reminder email sent to ${reservation.email}`);
    } catch (error) {
      console.error("Error sending reminder email:", error);
    }
  }
}

module.exports = new EmailService();
