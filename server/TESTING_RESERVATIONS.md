# Reservation API Testing Guide

This guide provides step-by-step instructions to test all reservation endpoints using Postman, Insomnia, or any REST client.

## Prerequisites

1. Start MongoDB (local or Atlas connection configured in .env)
2. Start the server:
   ```bash
   cd server
   npm run dev
   ```
3. Server should be running on `http://localhost:5000`

## Seed Database (Optional but Recommended)

Run the reservation seeder to populate the database with 30 sample reservations:

```bash
node src/seeds/reservationSeeder.js
```

This will create:
- 5 Pending reservations
- 8 Confirmed reservations
- 7 Completed reservations
- 3 Cancelled reservations
- 2 Rejected reservations
- 3 No Show reservations
- 2 Additional Confirmed reservations

---

## Test Scenarios

### 1. Create New Reservation (Public Route)

**Endpoint:** `POST http://localhost:5000/api/reservations`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john.doe@email.com",
  "phone": "03001234567",
  "guests": 4,
  "reservationDate": "2026-07-30",
  "reservationTime": "7:00 PM",
  "occasion": "Birthday",
  "specialRequests": "Window seat preferred, birthday cake needed"
}
```

**Expected Response (201):**
```json
{
  "success": true,
  "message": "Reservation created successfully. Confirmation email has been sent.",
  "data": {
    "reservation": {
      "id": "...",
      "confirmationCode": "SG-2026-ABC123",
      "fullName": "John Doe",
      "email": "john.doe@email.com",
      "phone": "03001234567",
      "guests": 4,
      "reservationDate": "2026-07-30T00:00:00.000Z",
      "reservationTime": "7:00 PM",
      "occasion": "Birthday",
      "tableNumber": 5,
      "status": "Pending"
    }
  }
}
```

**Test Cases:**
- ✅ Valid reservation (should auto-assign table)
- ❌ Missing required fields (should return 400 error)
- ❌ Invalid email format (should return 400 error)
- ❌ Invalid phone (should return 400 error)
- ❌ Guests < 1 or > 20 (should return 400 error)
- ❌ Past date (should return 400 error)
- ❌ Invalid time format (should return 400 error)
- ❌ Invalid occasion (should return 400 error)
- ❌ Double booking same date/time (should return 400 error)

---

### 2. Get Reservation by Confirmation Code (Public Route)

**Endpoint:** `GET http://localhost:5000/api/reservations/code/SG-2026-ABC123`

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Reservation fetched successfully",
  "data": {
    "_id": "...",
    "fullName": "John Doe",
    "email": "john.doe@email.com",
    "phone": "03001234567",
    "guests": 4,
    "reservationDate": "2026-07-30T00:00:00.000Z",
    "reservationTime": "7:00 PM",
    "occasion": "Birthday",
    "specialRequests": "Window seat preferred, birthday cake needed",
    "tableNumber": 5,
    "status": "Pending",
    "confirmationCode": "SG-2026-ABC123",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

**Test Cases:**
- ✅ Valid confirmation code
- ❌ Invalid confirmation code (should return 404)
- ❌ Malformed code format (should return 400)

---

### 3. Get All Reservations (Admin Route)

**Endpoint:** `GET http://localhost:5000/api/reservations`

**Query Parameters (all optional):**
- `page=1`
- `limit=20`
- `sort=reservationDate`
- `order=desc`
- `status=Pending`
- `date=2026-07-30`
- `search=john`

**Examples:**

**Get all pending reservations:**
```
GET http://localhost:5000/api/reservations?status=Pending
```

**Get reservations for specific date:**
```
GET http://localhost:5000/api/reservations?date=2026-07-30
```

**Search by name or email:**
```
GET http://localhost:5000/api/reservations?search=john
```

**Paginated results:**
```
GET http://localhost:5000/api/reservations?page=1&limit=10&sort=reservationDate&order=asc
```

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Reservations fetched successfully",
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "totalItems": 30,
    "itemsPerPage": 10,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

**Test Cases:**
- ✅ Get all reservations (no filters)
- ✅ Filter by status
- ✅ Filter by date
- ✅ Search functionality
- ✅ Pagination
- ✅ Sorting (asc/desc)

---

### 4. Get Single Reservation by ID (Admin Route)

**Endpoint:** `GET http://localhost:5000/api/reservations/:id`

**Example:**
```
GET http://localhost:5000/api/reservations/6672abc123def456789
```

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Reservation fetched successfully",
  "data": {
    "_id": "6672abc123def456789",
    "fullName": "John Doe",
    ...
  }
}
```

**Test Cases:**
- ✅ Valid MongoDB ObjectId
- ❌ Invalid ObjectId format (should return 400)
- ❌ Non-existent ID (should return 404)

---

### 5. Update Reservation (Admin Route)

**Endpoint:** `PUT http://localhost:5000/api/reservations/:id`

**Headers:**
```
Content-Type: application/json
```

**Request Body (all fields optional):**
```json
{
  "fullName": "John Doe Updated",
  "guests": 6,
  "reservationDate": "2026-07-31",
  "reservationTime": "8:00 PM",
  "specialRequests": "Updated special requests",
  "notes": "Admin note: Guest requested time change"
}
```

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Reservation updated successfully",
  "data": {
    "_id": "...",
    "fullName": "John Doe Updated",
    "guests": 6,
    ...
  }
}
```

**Test Cases:**
- ✅ Update single field
- ✅ Update multiple fields
- ✅ Change date/time (should auto-reassign table if needed)
- ✅ Change guest count (should auto-reassign table if needed)
- ❌ Invalid data (should return 400)
- ❌ Update to unavailable slot (should return 400)

---

### 6. Update Reservation Status (Admin Route)

**Endpoint:** `PATCH http://localhost:5000/api/reservations/:id/status`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "status": "Confirmed",
  "notes": "Reservation confirmed by admin"
}
```

**Valid Status Values:**
- `Pending`
- `Confirmed`
- `Completed`
- `Cancelled`
- `Rejected`
- `No Show`

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Reservation status updated to Confirmed",
  "data": {
    "_id": "...",
    "status": "Confirmed",
    "notes": "Reservation confirmed by admin",
    ...
  }
}
```

**Email Notifications:**
- Status changed to `Confirmed` → Sends confirmation email
- Status changed to `Cancelled` → Sends cancellation email

**Test Cases:**
- ✅ Update to Confirmed (should send email)
- ✅ Update to Cancelled (should send email)
- ✅ Update to Completed
- ✅ Update to No Show
- ✅ Update to Rejected
- ❌ Invalid status (should return 400)

---

### 7. Delete Reservation (Admin Route)

**Endpoint:** `DELETE http://localhost:5000/api/reservations/:id`

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Reservation deleted successfully",
  "data": null
}
```

**Test Cases:**
- ✅ Delete existing reservation
- ❌ Delete non-existent reservation (should return 404)
- ❌ Invalid ID format (should return 400)

---

## Double Booking Prevention Tests

### Test 1: Create Reservation for Occupied Slot

**Step 1:** Create first reservation
```json
POST /api/reservations
{
  "fullName": "User One",
  "email": "user1@email.com",
  "phone": "03001111111",
  "guests": 4,
  "reservationDate": "2026-08-01",
  "reservationTime": "7:00 PM",
  "occasion": "Family Dinner"
}
```
Response: Table 5 assigned

**Step 2:** Try to create another reservation for same slot
```json
POST /api/reservations
{
  "fullName": "User Two",
  "email": "user2@email.com",
  "phone": "03002222222",
  "guests": 4,
  "reservationDate": "2026-08-01",
  "reservationTime": "7:00 PM",
  "occasion": "Family Dinner"
}
```
Response: Table 6 assigned (different table, no conflict)

**Step 3:** Fill all tables for same time
Create 20 reservations for the same date/time with varying guests.

**Step 4:** Try 21st reservation
Expected: `400 Bad Request` - "No tables available for the selected date and time."

---

## Automatic Table Assignment Tests

### Test 1: Small Party (2 guests)
- Should assign smallest table (Table 1 or 2)

### Test 2: Medium Party (4 guests)
- Should assign Table 5-10 (capacity 4)

### Test 3: Large Party (6 guests)
- Should assign Table 11-14 (capacity 6)

### Test 4: Extra Large Party (8 guests)
- Should assign Table 15-20 (capacity 8)

### Test 5: Guests Exceeding Single Table (>8 guests)
- Current limit is 20 guests per reservation
- System will assign largest available table (8 capacity)
- In production, you may want to handle this differently

---

## Validation Error Tests

### Test Invalid Email
```json
POST /api/reservations
{
  "fullName": "Test User",
  "email": "invalid-email",
  "phone": "03001234567",
  "guests": 4,
  "reservationDate": "2026-08-01",
  "reservationTime": "7:00 PM",
  "occasion": "Birthday"
}
```
Expected: `400 Bad Request` - "Please provide a valid email"

### Test Invalid Phone
```json
{
  ...
  "phone": "123"
}
```
Expected: `400 Bad Request` - "Phone number must be between 10 and 15 digits"

### Test Past Date
```json
{
  ...
  "reservationDate": "2020-01-01"
}
```
Expected: `400 Bad Request` - "Reservation date cannot be in the past"

### Test Invalid Time Format
```json
{
  ...
  "reservationTime": "19:00"
}
```
Expected: `400 Bad Request` - "Invalid time format. Use format: 7:00 PM"

### Test Invalid Guest Count
```json
{
  ...
  "guests": 0
}
```
Expected: `400 Bad Request` - "Number of guests must be between 1 and 20"

```json
{
  ...
  "guests": 25
}
```
Expected: `400 Bad Request` - "Number of guests must be between 1 and 20"

### Test Invalid Occasion
```json
{
  ...
  "occasion": "Random Occasion"
}
```
Expected: `400 Bad Request` - "Invalid occasion"

---

## Email Testing

To test email functionality, configure your `.env` with valid SMTP credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**For Gmail:**
1. Enable 2-factor authentication
2. Generate app password
3. Use app password in EMAIL_PASS

**Email Templates to Test:**
1. Reservation Confirmation (sent on creation and status change to Confirmed)
2. Reservation Cancelled (sent on status change to Cancelled)
3. Reservation Reminder (template created, scheduled sending to be implemented)

**Check emails for:**
- ✅ Correct recipient
- ✅ Personalized content (name, date, time, table, confirmation code)
- ✅ Professional formatting
- ✅ All reservation details included

---

## Postman Collection

You can import this JSON into Postman:

```json
{
  "info": {
    "name": "Spice Garden - Reservations API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Create Reservation",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "url": "http://localhost:5000/api/reservations",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"fullName\": \"John Doe\",\n  \"email\": \"john.doe@email.com\",\n  \"phone\": \"03001234567\",\n  \"guests\": 4,\n  \"reservationDate\": \"2026-07-30\",\n  \"reservationTime\": \"7:00 PM\",\n  \"occasion\": \"Birthday\",\n  \"specialRequests\": \"Window seat preferred\"\n}"
        }
      }
    },
    {
      "name": "Get All Reservations",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/api/reservations"
      }
    },
    {
      "name": "Get Reservation by Code",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/api/reservations/code/{{confirmationCode}}"
      }
    },
    {
      "name": "Get Reservation by ID",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/api/reservations/{{reservationId}}"
      }
    },
    {
      "name": "Update Reservation",
      "request": {
        "method": "PUT",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "url": "http://localhost:5000/api/reservations/{{reservationId}}",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"guests\": 6,\n  \"specialRequests\": \"Updated requests\"\n}"
        }
      }
    },
    {
      "name": "Update Reservation Status",
      "request": {
        "method": "PATCH",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "url": "http://localhost:5000/api/reservations/{{reservationId}}/status",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"status\": \"Confirmed\",\n  \"notes\": \"Admin confirmed\"\n}"
        }
      }
    },
    {
      "name": "Delete Reservation",
      "request": {
        "method": "DELETE",
        "url": "http://localhost:5000/api/reservations/{{reservationId}}"
      }
    }
  ]
}
```

---

## Common Issues & Solutions

### Issue: "No tables available"
**Solution:** 
- Check existing reservations for that date/time
- Try different time slot
- Cancel/delete test reservations

### Issue: Email not sending
**Solution:**
- Verify EMAIL_USER and EMAIL_PASS in .env
- Check SMTP settings
- For Gmail, use app password, not regular password
- Check spam folder

### Issue: "Reservation date cannot be in the past"
**Solution:**
- Use future dates only
- Format: "YYYY-MM-DD" (ISO 8601)

### Issue: Validation errors
**Solution:**
- Check request body matches schema exactly
- Verify all required fields are present
- Validate data types and formats

---

## Next Steps

After testing all endpoints:

1. ✅ Verify all CRUD operations work
2. ✅ Test double-booking prevention
3. ✅ Test automatic table assignment
4. ✅ Test email notifications
5. ✅ Test validation rules
6. ✅ Test pagination and filtering
7. ✅ Document any bugs found
8. ✅ Ready for frontend integration

---

**Happy Testing! 🎉**
