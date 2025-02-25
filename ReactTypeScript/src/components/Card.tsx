import Modal from "./Modal";


function Card() {
    class Fruit {
        name: string;
        description: string;
        image: string;

        constructor(name: string, description: string, image: string) {
            this.name = name;
            this.description = description;
            this.image = image;
        }
    }

    const fruits: Fruit[] = [
        new Fruit(
            "Banana",
            "This is a banana",
            "https://i5.walmartimages.com/seo/Fresh-Banana-Fruit-Each_5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg"
        ),
        new Fruit(
            "Apple",
            "This is an apple",
            "https://kaufland.media.schwarz/is/image/schwarz/sc-magazin-lebensmittellexikon-apfel-gala?JGstbGVnYWN5LW9uc2l0ZS00JA=="
        ),
        new Fruit(
            "Orange",
            "This is an orange",
            "https://media.istockphoto.com/id/185284489/de/foto/orange.jpg?s=612x612&w=0&k=20&c=6mKVkfsTFeDgTLoA56W0fO2kBTEoj0vWk8x24pSjv_w="
        ),
        new Fruit(
            "Kiwi",
            "This is a kiwi",
            "https://media.istockphoto.com/id/827157432/de/foto/scheibe-der-kiwis-isoliert-auf-weiss.jpg?s=612x612&w=0&k=20&c=PMwS7TKZVDccnmLVMzel1e4zUT3a6fabnyqgATghUCc="
        )
    ];

    return (
        <>
            <div className="container">
                <div className="row gy-3">
                    {fruits.map((fruit) => (
                        <div className="col-md-4" key={fruit.name}>
                            <div className="card h-100">
                                <img
                                    src={fruit.image}
                                    className="card-img-top"
                                    alt={fruit.name}
                                    style={{ height: "350px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{fruit.name}</h5>
                                    <p className="card-text">{fruit.description}</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary mt-auto"
                                        data-bs-toggle="modal"
                                        data-bs-target={"#" + fruit.name}
                                    >
                                        Open Modal
                                    </button>
                                </div>
                            </div>
                            <Modal name={fruit.name}/>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    );
}

export default Card;
