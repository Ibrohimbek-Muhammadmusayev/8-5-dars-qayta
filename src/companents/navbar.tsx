import Image from "next/image";
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import Link from "next/link";

// dropdoun function
const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
  ];
  const menuProps = {
    items,
  };

export default function Navbar() {
    return (
      <header className="w-full">
        <div className="bg-black">
            <div className="max-w-[1240px] h-[32px] items-center flex justify-between mx-auto">
                <div className=""></div>
                <div className="flex gap-[8px]">
                    <h1 className="text-white font-normal text-[14px]">
                        Sign up and get 20% off to your first order
                    </h1>
                    <Link href={'/'} className="text-white font-medium text-[14px] underline">Sign Up Now</Link>
                </div>
                <div className="cursor-pointer">
                    <Image
                        src="/close.svg"
                        alt="search"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
        <nav className="max-w-[1240px] sm:px-[10px] md:px-[10px] xl:px-[10px] h-[96px] mx-auto flex justify-between items-center">
            <Button className="sm:flex md:flex lg:hidden border-none h-[30px]">
                <Image
                    src="haburger.svg"
                    alt="logo"
                    width={34}
                    height={34}
                />    
            </Button>
            <Link href={'/'}>
                <Image
                    src="SHOP-logo.svg"
                    alt="logo"
                    width={160}
                    height={22}
                />
            </Link>
            <ul className="flex sm:hidden lg:flex gap-[24px]">
                <li>
                    <Dropdown className="border-none p-0 text-[16px] font-normal" menu={menuProps}>
                        <Button>
                            <Space>
                            Shop
                            <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </li>
                <li className="text-[16px] font-normal"><a href="#">On Sale</a></li>
                <li className="text-[16px] font-normal"><a href="#">New Arrivals</a></li>
                <li className="text-[16px] font-normal"><a href="#">Brands</a></li>
            </ul>
            <div className="w-[577px] sm:hidden lg:w-[430px] md:flex rounded-[62px] flex gap-[12px] pl-[18px] bg-[#F0F0F0] h-[48px]">
                <Image
                    src="/search.svg"
                    alt="search"
                    width={24}
                    height={24}
                />
                <input className="outline-none text-cyan-700 bg-[#F0F0F0]" placeholder="Search for products..." type="text" />
            </div>
            <div className="flex gap-[16px]">
                <Button className="border-none p-0">
                    <Image
                        src="Frame.svg"
                        alt="search"
                        width={24}
                        height={24}
                    />
                </Button>
                <Button className="border-none p-0">
                    <Image
                        className="border-none rounded-full px-0"
                        src="profile-logo.svg"
                        alt="search"
                        width={24}
                        height={24}
                    />
                </Button>
            </div>
        </nav>
      </header>
    );
}