import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
	const [{ playlists }] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <SidebarOptions Icon={HomeOutlinedIcon} title="Home" />
            <SidebarOptions Icon={SearchIcon} title="Search" />
            <SidebarOptions Icon={LibraryMusicOutlinedIcon} title="Your Library" />
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            <div className="sidebar__playlist">
                {playlists?.items?.map(playlist => (
                    <SidebarOptions title={playlist.name} />
                ))}
            </div>

        </div>
    )
}

export default Sidebar;
