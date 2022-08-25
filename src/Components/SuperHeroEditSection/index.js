import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Styles from "./css"
import { getSuperHeroById, updateSuperHero } from "../../Services/SuperheroService"
import RequiredFieldsComponent from "../../Components/RequiredFields"

const SuperHeroEditSection = (props) => {
    const [data, setData] = useState([]);
    const {
        register,
        handleSubmit,
    } = useForm();

    useEffect(() => {
        (async () => {
            const result = await getSuperHeroById(props.id);
            setData(result);
        })();
    }, []);

    const onSubmit = async (request) => {
        await updateSuperHero(request, props.id, data).then((res) => {
            alert("Update successfully.");
            props.onEditSuccess()
        }, (err) => {
            console("err", err)
            alert(err);
        });
    };

    return (<div>
        <Styles>
            <h1>{data.name}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {data.image_name && (<center><img src={`data:image/jpg;base64,${data.image_name}`} height="250" /></center>)} <br />
                <label>Power Stats <RequiredFieldsComponent /> <input {...register('power_stats')} type="text" name="power_stats" defaultValue={data.power_stats} /></label>
                <label>Image <RequiredFieldsComponent /> <input type="file" {...register("file")} /></label>
                <input type="submit" />
            </form>
        </Styles>
    </div >)
};
export default SuperHeroEditSection;