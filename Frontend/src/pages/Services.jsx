import React from 'react'
import { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { createService } from "../apiManager/service"
import toast from 'react-hot-toast';
import useServiceStore from "../store/service"

function Services() {
    const { services, setServices } = useServiceStore()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleCreateService = async () => {
        try {
            const values = await form.validateFields();
            console.log('Service Data:', values);
            const response = await createService(values)
            console.log('Response: ', response);
            setServices(response?.data?.service)
            toast.success("Service created successfully!")

            form.resetFields();
            setIsModalOpen(false);
        } catch (error) {
            console.log('Validation Failed:', error);
        }
    };

    return (
        <div className='px-12 py-4 bg-gray-100 h-screen'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-semibold'>Your Services</h1>
                <button className='bg-blue-500 px-10 py-2 rounded text-white text-sm' onClick={handleOpenModal}>Add New</button>
            </div>

            {/* Modal */}
            <Modal
                title="Create New Service"
                open={isModalOpen}
                onCancel={handleCloseModal}
                footer={[
                    <Button key="cancel" onClick={handleCloseModal}>Cancel</Button>,
                    <Button key="submit" onClick={handleCreateService} className='bg-blue-500 text-white'>Create Service</Button>
                ]}
            >
                <Form form={form} layout="vertical">
                    <Form.Item name="serviceName" label="Service Name" rules={[{ required: true, message: 'Please enter service name' }]}>
                        <Input placeholder="Enter service name" />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter description' }]}>
                        <Input.TextArea placeholder="Enter description" />
                    </Form.Item>
                    <Form.Item name="duration" label="Duration" rules={[{ required: true, message: 'Please enter duration' }]}>
                        <Input placeholder="Enter duration in minutes (e.g., 60)" />
                    </Form.Item>
                    <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please enter price' }]}>
                        <Input placeholder="Enter price" type="number" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Services