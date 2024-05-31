import React, { createContext, useState, useRef, useEffect, useContext } from 'react';
import Music from '../assets/img/L.mp3';

const MusicContext = createContext();

export const useMusic = () => useContext(MusicContext);

export const MusicProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(Music));

    useEffect(() => {
        const audio = audioRef.current;
        if (audio && !audio.paused) {
            setIsPlaying(true);
        } else {
            audio.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.error("Error playing audio:", error);
            });
        }

        return () => {
            audio.pause();
        };
    }, []);

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (audio) {
            if (audio.paused) {
                audio.play().then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.error("Error playing audio:", error);
                });
            } else {
                audio.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
            {children}
        </MusicContext.Provider>
    );
};
