"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../src/services/userService");
const types_1 = require("../src/types");
async function createAdmin() {
    try {
        const adminUser = await userService_1.UserService.createUser({
            email: 'admin@icdra2025.com',
            firstName: 'System',
            lastName: 'Administrator',
            userType: types_1.UserType.ADMIN,
            address: {
                street: 'Admin Street',
                zip: '00000',
                city: 'Admin City',
                state: 'Admin State',
                country: 'Saudi Arabia'
            },
            password: 'Admin123!'
        });
        console.log('✅ Admin user created successfully:');
        console.log('Email:', adminUser.email);
        console.log('ID:', adminUser.id);
        console.log('Type:', adminUser.userType);
        console.log('\n🔑 Login credentials:');
        console.log('Email: admin@icdra2025.com');
        console.log('Password: Admin123!');
    }
    catch (error) {
        if (error.code === 'P2002') {
            console.log('⚠️ Admin user already exists with this email');
        }
        else {
            console.error('❌ Error creating admin user:', error);
        }
    }
}
createAdmin();
//# sourceMappingURL=create-admin.js.map