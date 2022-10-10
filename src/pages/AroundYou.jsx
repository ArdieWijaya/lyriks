import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import {
    useGetSongDetailsQuery,
    useGetSongsByCountryQuery,
} from "../redux/services/shazamCore";

const AroundYou = () => {
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data, isFetching, error } = useGetSongsByCountryQuery(country);

    console.log(country);

    useEffect(() => {
        axios
            .get(
                `https://geo.ipify.org/api/v2/country?apiKey=at_vyEGxTT2xTH2iQH6PUeZVDqNShYDh`
            )
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [country]);

	if(isFetching && loading) return <Loader title="Loading songs around you" />;

    return;
};

export default AroundYou;
