import React from "react";
import { Link } from "react-router-dom";
import { Card, Divider } from "antd";
import { ElementType } from "react";

const { Meta } = Card;

interface NavCardProps {
  title: string;
  link: string;
  Icon: ElementType; // Define Icon prop as ElementType
}

const NavCard: React.FC<NavCardProps> = ({ title, link, Icon }) => {
  return (
    <Link to={link} className="link">
      <Card hoverable style={{ width: 240, height: 240, borderRadius: 50 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "12px" }}>
            <Icon style={{ fontSize: 64, color: "#1890ff" }} />
          </div>
          <Divider />
          <Meta title={title} />
        </div>
      </Card>
    </Link>
  );
};

export default NavCard;
