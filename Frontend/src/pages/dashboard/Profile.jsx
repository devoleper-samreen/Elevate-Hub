import React, { useState, useRef } from 'react'
import useUserStore from "../../store/user"
import { Modal, Avatar, Input, Spin, Form, Button } from "antd"
import {
    AiOutlineUser,
    AiOutlineMail,
    AiFillLinkedin,
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillFacebook,
    AiFillInstagram,
} from "react-icons/ai";
import { updateProfile, uploadImage } from "../../apiManager/profile"
import toast from 'react-hot-toast';

function Profile() {
    const inputRef = useRef(null);
    const { user: mentorData, setUser } = useUserStore()
    const [isEditing, setIsEditing] = useState(false)
    const [loading, setLoading] = useState(false)


    const generateAvatarUrl = (name) => {
        const initials = name
            ?.split(" ")
            .map((word) => word.charAt(0).toUpperCase())
            .join("");
        return `https://ui-avatars.com/api/?name=${initials}`;
    };


    const handleEditProfile = () => {
        setIsEditing(true)
    }

    const handleSubmit = async (values) => {

        const updatedData = {
            username: values.username,
            name: values.name,
            profile: {
                profilePicture: mentorData?.profile?.profilePicture,
                tags: values.title?.split(",").map((tag) => tag.trim()),
                skills: values.skills.split(",").map((skill) => skill.trim()),
                bio: values.bio,
                college: values.college,
                social: {
                    linkedin: values.linkedin,
                    github: values.github,
                    twitter: values.twitter,
                    facebook: values.facebook,
                }
            },
        }

        try {
            setLoading(true)


            const response = await updateProfile(updatedData)

            setUser(response?.data?.updatedUser)
            toast.success("Profile updated successfully!")

        } catch (error) {
            console.error("Profile update failed", error);

        } finally {
            setLoading(false)
            setIsEditing(false);
        }

    }

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setLoading(true);
            const formData = new FormData();
            formData.append("profilePicture", file);

            try {
                const response = await uploadImage(formData);

                setUser({
                    ...mentorData,
                    profile: {
                        ...mentorData.profile,
                        profilePicture: response.data.updatedProfile.profile.profilePicture
                    },

                });

            } catch (error) {
                console.error("Image upload failed", error);
            } finally {
                setLoading(false);
            }
        }
    };



    return (
        <div className="flex flex-col items-center w-full h-screen pb-10 px-10 bg-gradient-to-r from-green-50 to-white">
            <div className="flex flex-col w-full max-w-5xl space-y-10 bg-white shadow-xl rounded-b-3xl">
                <h2 className="mb-10 text-5xl font-bold text-center text-green-600">
                    My Profile
                </h2>
                <Spin spinning={loading}>
                    <div className="flex justify-center">
                        <Avatar
                            onClick={() => {
                                if (!loading) {
                                    inputRef.current.click();
                                }
                            }}
                            size={180}
                            src={mentorData?.profile?.profilePicture || generateAvatarUrl(mentorData?.name || "User")}
                            className="border-4 border-green-300 shadow-lg cursor-pointer transform hover:scale-110 transition-all"
                        />
                    </div>
                </Spin>

                <div className="text-center">
                    <h3 className="text-4xl font-semibold text-green-700">
                        {mentorData?.name}
                    </h3>
                    <p className="flex items-center justify-center mt-4 text-lg text-gray-700">
                        <AiOutlineMail className="mr-2 text-green-500" />
                        {mentorData?.email}
                    </p>
                    <p className="flex items-center justify-center mt-2 text-lg text-gray-700">
                        <AiOutlineUser className="mr-2 text-green-500" />
                        <span className="mt-2 text-lg text-gray-700">
                            Tags: {mentorData?.profile?.tags?.join(", ")}
                        </span>
                    </p>

                    <p className="mt-4 text-lg text-gray-700">
                        Bio: {mentorData?.profile?.bio}
                    </p>
                    {mentorData?.profile?.college && (
                        <p className="mt-2 text-lg text-gray-700">
                            College: {mentorData?.profile?.college}
                        </p>
                    )}
                    <p className="flex items-center justify-center mt-2 text-lg text-gray-700">
                        <span className="mt-2 text-lg text-gray-700">
                            Skills: {mentorData?.profile?.skills?.join(", ")}
                        </span>
                    </p>
                </div>

                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={loading}
                    onChange={handleImageChange}
                />

                <h3 className="text-2xl font-semibold text-center text-green-700">
                    Connect with Me
                </h3>
                <div className="flex justify-center mt-4 space-x-6">
                    <a href={mentorData?.profile?.social?.linkedin} target="_blank" className="text-green-600 hover:text-green-800 transition-transform transform hover:scale-110">
                        <AiFillLinkedin className="text-4xl" />
                    </a>
                    <a href={mentorData?.profile?.social?.github || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition-transform transform hover:scale-110">
                        <AiFillGithub className="text-4xl" />
                    </a>
                    <a href={mentorData?.profile?.social?.twitter || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110">
                        <AiFillTwitterCircle className="text-4xl" />
                    </a>
                    <a href={mentorData?.profile?.social?.facebook || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-110">
                        <AiFillFacebook className="text-4xl" />
                    </a>
                    <a href={mentorData?.profile?.social?.instagram || "#"} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-transform transform hover:scale-110">
                        <AiFillInstagram className="text-4xl" />
                    </a>
                </div>


                <Button
                    type="primary"
                    className="w-full mt-10 text-lg bg-green-500 rounded-lg hover:bg-green-600 transition-all"
                    onClick={handleEditProfile}
                >
                    Edit Profile
                </Button>

                <Modal
                    title="Edit Profile"
                    open={isEditing}
                    onCancel={() => setIsEditing(false)}
                    footer={null}
                    onFinish={handleSubmit}
                    className="rounded-lg shadow-lg"
                >
                    <Form initialValues={{
                        username: mentorData?.username,
                        name: mentorData?.name,
                        email: mentorData?.email,
                        title: mentorData?.profile?.tags?.join(","),
                        skills: mentorData?.profile?.skills?.join(","),
                        bio: mentorData?.profile?.bio,
                        college: mentorData?.profile?.college,
                        linkedin: mentorData?.profile?.social?.linkedin,
                        github: mentorData?.profile?.social?.github,
                        twitter: mentorData?.profile?.social?.twitter,
                        facebook: mentorData?.profile?.social?.facebook,
                    }}
                        onFinish={handleSubmit}
                        layout="vertical"
                    >
                        <Form.Item label="UserName" name="username" rules={[{ required: true }]}>
                            <Input placeholder="Enter your username" />
                        </Form.Item>
                        {/* Name */}
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: "Please enter your name" }]}
                        >
                            <Input placeholder="Enter your name" />
                        </Form.Item>

                        {/* Title */}
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[{ required: true, message: "Please enter your title" }]}
                        >
                            <Input placeholder="Enter your title (e.g., Software Engineer)" />
                        </Form.Item>

                        {/* Skills */}
                        <Form.Item
                            label="Skills"
                            name="skills"
                            rules={[{ required: true, message: "Please enter your skills" }]}
                        >
                            <Input placeholder="Enter skills separated by commas" />
                        </Form.Item>

                        {/* Bio */}
                        <Form.Item label="Bio" name="bio">
                            <Input.TextArea placeholder="Write a short bio about yourself" rows={4} />
                        </Form.Item>

                        {/* College */}
                        <Form.Item label="College" name="college">
                            <Input placeholder="Enter your college name" />
                        </Form.Item>

                        {/* Social Links */}
                        <Form.Item label="LinkedIn" name="linkedin">
                            <Input placeholder="Enter LinkedIn profile URL" />
                        </Form.Item>
                        <Form.Item label="GitHub" name="github">
                            <Input placeholder="Enter GitHub profile URL" />
                        </Form.Item>
                        <Form.Item label="Twitter" name="twitter">
                            <Input placeholder="Enter Twitter profile URL" />
                        </Form.Item>
                        <Form.Item label="Facebook" name="facebook">
                            <Input placeholder="Enter Facebook profile URL" />
                        </Form.Item>
                        <Form.Item label="Instagram" name="instagram">
                            <Input placeholder="Enter Instagram profile URL" />
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full bg-green-500 rounded-lg hover:bg-green-600">
                                Save Changes
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    )
}

export default Profile