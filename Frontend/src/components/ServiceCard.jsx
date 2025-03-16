import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";

const ServiceCard = ({ service }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const handleEditService = async () => {
        try {
            const values = await form.validateFields();
            console.log("Updated Service Data:", values);
            handleCloseModal();
        } catch (error) {
            console.log("Validation Failed:", error);
        }
    };

    return (
        <>
            <div className="bg-white shadow-lg rounded-2xl p-6 duration-300 hover:scale-105 transition transform hover:shadow-2xl">
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-purple-600" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                        </svg>
                        <h3 className="text-2xl font-bold text-gray-800">{service?.serviceName}</h3>

                    </div>
                    <div>
                        <button className="bg-red-600 text-white px-3 py-1 rounded">disable</button>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600 text-sm">{service?.description}</p>
                </div>

                <div className="flex justify-between items-center mt-4 text-gray-900 text-lg font-medium">
                    <p>💰 ₹{service?.price}</p>
                    <p>⏳ {service?.duration} mins</p>
                </div>

                <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={handleOpenModal}
                    className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 border-none text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition transform"
                >
                    Edit Service
                </Button>
            </div>


            {/* Modal */}
            <Modal
                title={<span className="text-lg font-semibold">Edit Service</span>}
                open={isModalOpen}
                onCancel={handleCloseModal}
                footer={[
                    <Button key="cancel" onClick={handleCloseModal} className="rounded-lg px-5 py-2">
                        Cancel
                    </Button>,
                    <Button key="submit" onClick={handleEditService} className="bg-blue-500 text-white rounded-lg px-5 py-2 hover:bg-blue-600 transition-all">
                        Save Changes
                    </Button>
                ]}
            >
                <Form
                    initialValues={{
                        serviceName: service.serviceName,
                        description: service.description,
                        duration: service.duration,
                        price: service.price,
                    }}
                    form={form}
                    layout="vertical"
                    preserve={false}
                >
                    <Form.Item name="serviceName" label="Service Name" rules={[{ required: true }]}>
                        <Input placeholder="Enter service name" className="rounded-lg px-3 py-2 border-gray-300 focus:ring focus:ring-blue-300" />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                        <Input.TextArea placeholder="Enter description" className="rounded-lg px-3 py-2 border-gray-300 focus:ring focus:ring-blue-300" />
                    </Form.Item>
                    <Form.Item name="duration" label="Duration" rules={[{ required: true }]}>
                        <Input placeholder="Enter duration in minutes" className="rounded-lg px-3 py-2 border-gray-300 focus:ring focus:ring-blue-300" />
                    </Form.Item>
                    <Form.Item name="price" label="Price" rules={[{ required: true }]}>
                        <Input placeholder="Enter price" type="number" className="rounded-lg px-3 py-2 border-gray-300 focus:ring focus:ring-blue-300" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ServiceCard;

