    export async function getAllHospital() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch("http://localhost:5001/api/v1/hospitals", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Cannot fetch");
    }

    return await res.json();
    }
    export async function getHospital(id: any) {
    let res;
    try {
        res = await fetch(`http://localhost:5001/api/v1/hospitals/${id}`, {
        cache: "no-store",
        });
    } catch (error) {
        console.log(error);
    }

    return await res?.json();
    }
