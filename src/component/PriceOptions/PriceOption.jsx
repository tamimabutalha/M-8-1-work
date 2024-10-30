import PriceOPT from "../PriceOPT/PriceOPT";

const PriceOption = () => {
    const priceOption = [
        {
            "id": 1,
            "name": "Basic",
            "price": 19.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 guest pass per month"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 39.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "5 guest passes per month",
                "Free group classes",
                "1 personal training session per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 59.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited guest passes",
                "Free group classes",
                "3 personal training sessions per month",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 4,
            "name": "VIP",
            "price": 99.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited guest passes",
                "Free group classes",
                "Unlimited personal training sessions",
                "Access to sauna and steam room",
                "Nutrition consultation",
                "Priority booking for classes"
            ]
        }
    ];

    return (
        <div className="m-12 ">
            <h2 className="text-5xl font-bold">Best price in the town</h2>
            <div className="grid md:grid-cols-4  gap-5  mt-10 ">
                {
                    priceOption.map(option => (
                        <PriceOPT key={option.id} option={option} />
                    ))
                }
            </div>
        </div>
    );
};

export default PriceOption;
