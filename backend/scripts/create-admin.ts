import { UserService } from '../src/services/userService';
import { UserType } from '../src/types';

async function createAdmin() {
  try {
    const adminUser = await UserService.createUser({
      email: 'admin@icdra2025.com',
      firstName: 'System',
      lastName: 'Administrator',
      userType: UserType.ADMIN,
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
    
  } catch (error: any) {
    if (error.code === 'P2002') {
      console.log('⚠️ Admin user already exists with this email');
    } else {
      console.error('❌ Error creating admin user:', error);
    }
  }
}

createAdmin();