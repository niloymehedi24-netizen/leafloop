import Container from "@/components/shared/Container";
import {
    FaLeaf,
    FaTruck,
    FaShieldAlt,
    FaHeadset,
} from "react-icons/fa";

const features = [
    {
        id: "1",
        title: "Healthy Plants",
        description:
            "Every plant is carefully selected and inspected before delivery.",
        icon: FaLeaf,
    },
    {
        id: "2",
        title: "Fast Delivery",
        description:
            "Receive your favorite plants quickly with secure packaging.",
        icon: FaTruck,
    },
    {
        id: "3",
        title: "Quality Guarantee",
        description:
            "We ensure every order meets the highest quality standards.",
        icon: FaShieldAlt,
    },
    {
        id: "4",
        title: "Expert Support",
        description:
            "Get professional plant care advice whenever you need it.",
        icon: FaHeadset,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24">
            <Container>
                <div className="mb-16 text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Why Choose Us
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        We Make Plant Shopping Easy
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        LeafLoop offers healthy plants, reliable delivery, and expert
                        guidance to help you build your perfect green space.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                                    <Icon className="text-2xl text-emerald-600" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}