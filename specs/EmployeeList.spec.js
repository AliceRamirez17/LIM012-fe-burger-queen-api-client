import { mount } from '@vue/test-utils'

import EmployeeList from '../src/components/EmployeeList.vue'

const arrUsers = [
  {
    "_id": 1,
    "email": "alice@gmail.com",
    "role": {
        "admin": true
    }
  },
  {
    "_id": 2,
    "email": "michelle@gmail.com",
    "role": {
        "admin": false
    }
  }
]

test('prop users return a array of users', () => {
  const wrapper = mount(EmployeeList, {
    propsData: {
      users: arrUsers
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('Modal and confirmation initializes to false', () => {
  const wrapper = mount(EmployeeList)
  expect(wrapper.vm.modal).toBe(false)
  expect(wrapper.vm.confirmation).toBe(false)
})