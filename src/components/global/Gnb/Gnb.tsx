import { useRouter } from "next/router";
import { GnbContainer } from "./styled";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/image/With_Dogi_Logo.png";
import newsIcon from "../../../assets/icons/dog_icon.png";
import postIcon from "../../../assets/icons/post_icon.png";
import chatIcon from "../../../assets/icons/chat_icon.png";
import profile from "../../../assets/icons/profile_icon.png";
const Gnb = () => {
  const router = useRouter();
  const menuList = [
    { text: "소식", icon: newsIcon, route: "/" },
    { text: "입양 / 실종", icon: postIcon, route: "/post" },
    { text: "메세지", icon: chatIcon, route: "/message" },
    { text: "프로필", icon: profile, route: "/profile" },
  ];
  return (
    <GnbContainer>
      <div className="logo">
        <Image
          alt="with_dogi_logo"
          src={logo}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="menuArea">
        {menuList.map((data, index) => {
          return (
            <div className="menu" key={index}>
              <Link href={data.route}>
                <div>
                  <Image
                    alt={`${data.icon}`}
                    src={data.icon}
                    style={{
                      width: "auto",
                      height: "25px",
                      marginLeft: "2px",
                    }}
                  />
                </div>
                <div
                  className={`text ${
                    router.route === data.route && "currentPage"
                  }`}
                >
                  {data.text}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </GnbContainer>
  );
};

export default Gnb;
