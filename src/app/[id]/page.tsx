import { Button } from "antd"
import Image from "next/image"
import Link from "next/link"

export async function generateStaticParams() {
    const posts = [
      'post-1',
      'post-2',
      'post-3',
      'post-4'
    ]
    return posts.map((post) => ({
      id: post
    }))
}

const data = [
  {
    id: 1,
    title: 'T-SHIRT WITH TAPE DETAILS',
    img: '/Frame1.png',
    price: 120,
  },
  {
    id: 2,
    title: 'SKINNY FIT JEANS',
    img: '/jeans.png',
    price: 140,
  },
  {
    id: 3,
    title: 'CHECKERED SHIRT',
    img: '/shirt.png',
    price: 100,
  },
  {
    id: 4,
    title: 'SLEEVE STRIPED T-SHIRT',
    img: '/t-shitr.png',
    price: 160,
  }
]


export default function Post({ params }: { params: { id: string } }) {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto">
        <div className="pl-[100px]">
          {data.map((item) => (
            item.id == params.id as unknown ?
            (<div className="flex gap-[120px] mt-[82px]">
                <div className="">
                  <Image
                    src={item.img}
                    alt="images"
                    width={444}
                    height={530}
                  />
                </div>
                <div className="">
                  <h1 className="text-[40px] font-bold">{item.title}</h1>
                  <div className="flex gap-[40px] items-center">
                    <div className="flex gap-[14px]">
                      <Image
                        src="/rating.svg"
                        alt="images"
                        width={140}
                        height={25}
                      />
                      <p>4.5/5</p>
                    </div>
                    <h1 className="text-[40px] font-bold">${item.price}</h1>
                  </div>
                  <p className="mt-[24px]">Select Colors</p>
                  <div className="flex gap-[16px] mt-[16px]">
                    <button className="w-[45px] h-[45px] rounded-full bg-[#6c2496]"></button>
                    <button className="w-[45px] h-[45px] rounded-full bg-[#298d9d]"></button>
                    <button className="w-[45px] h-[45px] rounded-full bg-[#8a1f1f]"></button>
                  </div>
                  <p className="mt-[24px]">Choose Size</p>
                  <div className="flex mt-[16px] gap-[12px]">
                    <Button>Small</Button>
                    <Button>Medium</Button>
                    <Button>Large</Button>
                    <Button>X-Large</Button>
                  </div>
                  <div className="mt-[40px] flex gap-[20px] items-center ">
                    <div className="rounded-[62px] flex w-[170px] justify-center items-center h-[52px] bg-[#F0F0F0] gap-[15px]">
                      <Button className="border-none bg-[#F0F0F0] text-[30px]">-</Button>
                      <p>1</p>
                      <Button className="border-none bg-[#F0F0F0] text-[30px]">+</Button>
                    </div>
                    <Button className="w-[210px] h-[52px] bg-black text-white rounded-[62px]">Add to Cart</Button>
                  </div>
                </div>
            </div>) : null
          ))}
        </div>
        <div className="mt-[70px]">
          <div className="flex justify-center mb-[55px] items-center">
            <h1 className="font-bold text-[48px] text-black">You might also like</h1>
          </div>
          <div className="flex flex-wrap justify-between">
            <Link href={'/1'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/Frame1.png'
                  alt="images"
                  width={295}
                  height={298}
                  />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                  />
                <h1>$120</h1>
              </div>
            </Link>
            <Link href={'/2'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/jeans.png'
                  alt="images"
                  width={295}
                  height={298}
                />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                />
                <h1>$120</h1>
              </div>
            </Link>
            <Link href={'/3'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/shirt.png'
                  alt="images"
                  width={295}
                  height={298}
                />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                />
                <h1>$120</h1>
              </div>
            </Link>
            <Link href={'/4'}>
              <div className="flex flex-col gap-[8px]">
                <Image
                  src='/t-shitr.png'
                  alt="images"
                  width={295}
                  height={298}
                />
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
                <Image
                  src='/rating.svg'
                  alt="images"
                  width={150}
                  height={19}
                />
                <h1>$120</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}