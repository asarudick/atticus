import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Album as AlbumData } from '../types/Album';
import { Track as TrackData } from '../types/Track';
import './Track.css';

export default function Album() {
    const { id } = useParams();
    const [album, setAlbum] = useState<AlbumData | undefined>();
    
    async function getAlbum(id: number): Promise<any> {
        const result = await fetch(`http://localhost:3001/albums/${id}`);
        return result.json();
    }

    useEffect(() => {
        (async () => {
            setAlbum(await getAlbum(id));
        })()
    }, [id]);

    return (
        <div className="album">
            <div>{album && album.title}</div>
    <div>{album?.tracks.map((track: TrackData) => {
        
    })}
    
    </div>
    </div>
    )
}
