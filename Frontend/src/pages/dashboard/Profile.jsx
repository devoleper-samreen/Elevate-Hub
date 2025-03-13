import React, { useState } from 'react'
import useUserStore from "../../store/user"
import Link from "react-router-dom"
import { Modal, Avatar, Input, Spin, Form, Button } from "antd"

function Profile() {
    const { user: mentorData, setUser } = useUserStore()
    const [isEditing, setIsEditing] = useState(false)
    const generateAvatarUrl = (name) => {
        const initials = name.split(" ".map((word) => word.charAt(0).toUpperCase()).join(""))

        return `https:ui-avatars.com/api/?name${initials}`
    }

    const handleEditProfile = () => {
        setIsEditing(true)

    }

    return (
        <div>
            <h2>My Profile</h2>
            <div>
                <Avatar size={100} src={mentorData?.photoUrl || generateAvatarUrl(mentorData?.name) || "User"} />
                <div>
                    <h3>{mentorData?.name}</h3>
                </div>
                <div>
                    <h3>{mentorData?.email}</h3>
                </div>
                <div>
                    <h3>{mentorData?.title}</h3>
                </div>
                <div>
                    <h3>{mentorData?.profile?.tags}</h3>
                </div>
                <div>
                    <h3>{mentorData?.profile?.bio}</h3>
                </div>
                <div>
                    <h3>{mentorData?.profile?.college}</h3>
                </div>
            </div>

            <div>
                <Link to={mentorData?.social?.linkdin}>svg</Link>
            </div>
            <button onClick={handleEditProfile}>Edit Profile</button>

            <Modal open={isEditing} onCancel={() => setIsEditing(false)}>
                <Form initialValues={{ name: mentorData?.name }} onFinish={handleSubmit}>
                    <Form.Item rules={[{ required: true, message: "please enter your name" }]}>
                        <input type="text" />

                    </Form.Item>
                    <Form.Item>
                        <Button>Save changes</Button>
                    </Form.Item>

                </Form>

            </Modal>

        </div>
    )
}

export default Profile