### Sign in (gets verification code):

```
curl -X POST http://localhost:6001/api/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@icdra2025.com","password":"Admin123!"}'
```

### Verify code (gets JWT token):
```
curl -X POST http://localhost:6001/api/verify-code \
  -H "Content-Type: application/json" \
  -d '{"userId":"FROM_THE_ABOVE_REQUEST","code":"123456"}'
```

### Create user with admin token
```
curl -X POST http://localhost:6001/api/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NGFkOWI3OC05NjcxLTRmYzYtOWNjZS0xNzYxYzg3MmFlYzMiLCJlbWFpbCI6Imp1bmFpZGF6aGFyc2hhaWtoQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiQURNSU4iLCJpYXQiOjE3NTI3NjY1MzcsImV4cCI6MTc1Mjc5NTMzN30.n8BctpMe7VJ5rjfbBcsI9s_8IXAUgdJCn0lt1QpWuxw" \
  -d '{
    "email": "junaidazharsheikh@gmail.com",
    "firstName": "Jerry",
    "lastName": "Sheikh", 
    "userType": "WHO",
    "address": {
      "street": "123 Main St",
      "zip": "12345",
      "city": "Riyadh",
      "state": "Riyadh Province",
      "country": "Saudi Arabia"
    }
  }'
```