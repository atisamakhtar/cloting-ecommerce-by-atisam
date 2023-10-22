// 'use client'
// import { useRouter } from "next/navigation";

export default function GiveName({ params, searchParams }: {
    params: { kuchb: string },
    searchParams: { id: string },
}) {

    // const router = useRouter();
    console.log(params);

    return (
        <div>
            My name is {params.kuchb}
        </div>
    )
}