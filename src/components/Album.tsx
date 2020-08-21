import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Album as AlbumData } from '../types/Album';
import { Track as TrackData } from '../types/Track';
import './Album.css';
import { Track } from './Track';
import { Link } from 'react-router-dom';

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
        <div className="Album">
            <div className="Album__title">{album && album.title}</div>
            <ul className="Album__tracks">
                {album?.tracks.map((t: TrackData, i: number) => 
                    <>
                        <Link to={{
                            pathname: `/play/${t.id}`
                        }} >
                                <li>
                                    <span className="Album__track__number">{i}</span> <Track key={t.id} title={t.title} />
                                </li>
                        </Link>
                    </>
                )}
            </ul>
    </div>
    )
}
