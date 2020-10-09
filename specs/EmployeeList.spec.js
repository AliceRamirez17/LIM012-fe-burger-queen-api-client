import { mount } from '@vue/test-utils'

import EmployeeList from '../src/components/EmployeeList.vue'
import ModalEmployee from '../src/components/ModalEmployee.vue'
import ConfirmationModal from '../src/components/ConfirmationModal.vue'

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

describe('Testing Employee List component', () => {
  test('prop users return a array of users', () => {
    const wrapper = mount(EmployeeList, {
      propsData: {
        users: arrUsers
      }
    })
    expect(wrapper.props().users).toBe(arrUsers)
  
    expect(wrapper.html()).toMatchSnapshot()
  })
  
  test('Modal and confirmation initializes to false', () => {
    const wrapper = mount(EmployeeList)
    expect(wrapper.vm.modal).toBe(false)
    expect(wrapper.vm.confirmation).toBe(false)
  
    expect(wrapper.html()).toMatchSnapshot()
  })
  
  test('Find components', async () => {
    const wrapper = mount(EmployeeList, {
      data() {
        return {
          modal: true,
          confirmation: true
        }
      }
    })

    expect(wrapper.findComponent(ModalEmployee).exists()).toBeTruthy()
    expect(wrapper.findComponent(ConfirmationModal).exists()).toBeTruthy()
  })
})