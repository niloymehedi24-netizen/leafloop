import Container from "@/components/shared/Container";
import { careTips } from "@/data/careTips";

import { FaSeedling, FaTint } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";

const iconMap = {
    water: FaTint,
    sun: WiDaySunny,
    seedling: FaSeedling,
};

export default function PlantCareTips() {
    return (
        <section className="bg-slate-50 py-24">
            <Container>
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Plant Care Guide
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Keep Your Plants Happy & Healthy
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Simple care tips that help your plants thrive, whether you are a
                        beginner or an experienced plant parent.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {careTips.map((tip) => {
                        const Icon = iconMap[tip.icon];

                        return (
                            <div
                                key={tip.id}
                                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 transition-colors duration-300 group-hover:bg-emerald-600">
                                    <Icon className="text-3xl text-emerald-600 transition-colors duration-300 group-hover:text-white" />
                                </div>

                                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                                    {tip.title}
                                </h3>

                                <p className="leading-7 text-slate-600">
                                    {tip.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}