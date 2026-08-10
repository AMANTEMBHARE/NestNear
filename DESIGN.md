# NestNear

## 1. Problem Statement

Students relocating to another city often struggle to find trustworthy PGs, mess services, and affordable food options near their college. Most available information is scattered or unverified.

NestNear helps students discover verified accommodations and food services around their college through trusted reviews and centralized information.

---

## 2. User Roles

### Student

Can register and login.

Search by city.

Search by college.

View PGs.

View mess services.

Bookmark listings.

Request admission.

Review verified stays.

Edit profile.

---

### PG Owner

Register and login.

Create PG listings.

Upload images.

Update room availability.

Approve admission requests.

View dashboard.

Edit their own listings.

Respond to reviews.

---

### Admin

Approve PG listings.

Remove fake listings.

Delete inappropriate reviews.

Manage users.

Monitor platform activity.

---

## 3. Modules

Authentication

Student

College

PG

Mess

Food Service

Review

Bookmark

Search

Admin Dashboard

---

## 4. Business Rules

Only approved PGs are visible.

Only admitted students can review.

One review per student per PG.

PG owners can edit only their own listings.

Students can bookmark multiple PGs.

Admins can delete any listing.

---

## 5. Future Features

Roommate Finder

AI Recommendations

Chat

Notifications

Payments

Complaint System


## 6. Database Design

User 
College
PG 
FoodService 
Review  
Admission
Bookmark  this are entites which will be in databases

and have also understand relationships




### 7. API Design

#### Authentication

POST /auth/register

POST /auth/login

POST /auth/logout

GET /auth/me


#### PG

POST /pgs

GET /pgs

GET /pgs/:id

PUT /pgs/:id

DELETE /pgs/:id

#### College

#### Food Service

#### Admission
