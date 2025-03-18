import React from "react";
import { Card, Avatar, Tag } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MentorCard = ({ mentor }) => {
    const navigate = useNavigate()

    return (
        <Card
            onClick={() => navigate(`/mentors/${mentor.username}`)}
            hoverable
            className="w-80 h-80 flex flex-col items-center justify-center shadow-md rounded-full transition transform hover:scale-105"
        >
            <div className="relative group w-40 h-40 rounded-full overflow-hidden shadow-md">
                <Avatar
                    size={160}
                    src={mentor.profile.profilePicture || `https://ui-avatars.com/api?name=${mentor.name}`}
                    alt={`${mentor.name}avatar`}
                />
            </div>
            <h3 className="py-2 text-2xl font-bold text-gray-800">{mentor.name}</h3>
            <div className="flex items-center justify-center gap-x-2 mt-2 text-gray-600">
                <HomeOutlined className="text-yellow-600" />
                <span>{mentor.profile.college || "College"}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
                {
                    mentor.profile.tags.map((tag, i) => (
                        <Tag color="gold" key={i}>{tag}</Tag>
                    ))
                }

            </div>
        </Card>
    );
};

export default MentorCard;
