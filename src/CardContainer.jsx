import Card from "./Card";

export default function CardContainer() {
  const data = [
    {
      image:
        "https://media.istockphoto.com/id/1696725120/photo/portrait-of-handsome-young-man-giving-thumbs-up-against-gray-background.webp?b=1&s=612x612&w=0&k=20&c=j1wnAfuO9XTZWMNBOq_t5BjBMZgJZd-yeo1ykTieo1c=",
      name: "Hello Zulquar",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam illo dolorum dolore doloremque modi quia velit culpa consectetur adipisicing.",
    },

    {
      image:
        "https://media.istockphoto.com/id/1446032808/photo/confident-businessman-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=DN2UpvE1J-Awt9zROeql1J6jBZ_7785avD8bqtoBGec=",
      name: "Hello Zeeshan",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam illo dolorum dolore doloremque modi quia velit culpa consectetur adipisicing.",
    },

    {
      image:
        "https://media.istockphoto.com/id/1167770705/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-approving-doing.jpg?s=1024x1024&w=is&k=20&c=GjuKHaqpDs1sn-JH5Gge6N376yq4cr22mnP4JM5MKHs=",
      name: "Hello Jalal",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam illo dolorum dolore doloremque modi quia velit culpa consectetur adipisicing.",
    },

    {
      image:
        "https://media.istockphoto.com/id/1951711154/photo/photo-of-young-women-in-winter-wear-standing-on-yellow-background-stock-photo.jpg?s=1024x1024&w=is&k=20&c=adwzMNBnAgHho2twWNNWwNnjt5ZkeURgCHpsllcoIt8=",
      name: "Hello Ishrat",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam illo dolorum dolore doloremque modi quia velit culpa consectetur adipisicing.",
    },
  ];
  return (
    <div className="main bg-orange-300 w-full h-screen flex justify-center items-center">
      <div className="container bg-stone-400 w-4/5 h-5/6 border-4 border-solid border-cyan-600 rounded-md flex items-center justify-between px-2 ">
        {data.map((elem, index) => (
          <Card key={index} value={elem} />
        ))}
      </div>
    </div>
  );
}
