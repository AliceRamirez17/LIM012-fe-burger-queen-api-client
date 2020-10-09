import { mount } from '@vue/test-utils'

import ProductToOrder from '../src/components/ProductToOrder.vue'

const arrProducts = [
    {
        "_id": 0,
        "name": "Café americano",
        "price": 5,
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
        "type": "breakfast",
        "date": "13/08/2020"
    },
    {
        "_id": 1,
        "name": "Café con leche",
        "price": 7,
        "image": "https://images.unsplash.com/photo-1585970279348-df94767b9cca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "type": "breakfast",
        "date": "13/08/2020"
    }
]

const objProduct = {
    name: 'Hamburgesa',
    price: 10,
    _id: 5
}

describe('Testing ProductToOrder', () => {
    test('Emit event show modal have to been called', async () => {
        const wrapper = mount(ProductToOrder, {
            propsData: {
                products: arrProducts
            }
        })
        wrapper.vm.$emit('showModal')
        wrapper.vm.$emit('addProduct', objProduct)

        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().showModal).toBeTruthy()
        expect(wrapper.emitted().addProduct).toBeTruthy()
    })
})