import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Track as TrackData } from '../types/Track';
import './Track.css';

export default function Track() {
    const { id } = useParams();
    const [track, setTrack] = useState<TrackData | undefined>();
    
    async function getTrack(id: number): Promise<any> {
        const result = await fetch(`http://localhost:3001/tracks/${id}`);
        return result.json();
    }

    useEffect(() => {
        (async () => {
            setTrack(await getTrack(id));
        })()
    }, [id]);

    return (
        <div className="Track">
            <div>{track && track.title}</div>
            {
                track
                ?
                <audio controls src={track ? track.url : ""}></audio>
                :
                "Loading..."
            }
        </div>
    )
}
