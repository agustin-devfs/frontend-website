import Marquee from "./Marquee";
import {icons} from "@/app/core/utils/contants"
import { useMediaQuery, useTheme } from "@mui/material";
import Image from 'next/image';

function renderIcons() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantallas pequeñas
	return (
		<div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
			{icons.map((icon, index) => (
				<div 
					key={index} 
					style={{ display: 'flex', alignItems: 'center', margin:  isSmallScreen? '0 5px' : '0 10px' }}
				>
					<Image
						src={icon.src} 
						alt={icon.alt} 
						width={isSmallScreen? 25:40}
						height={isSmallScreen? 25:40}
						style={{marginRight: '10px', marginLeft: '10px' }} 
					/>
					<span style={{ fontFamily: 'podkova', fontWeight: '400', lineHeight: '40px', letterSpacing: '1px', fontSize: isSmallScreen? '25px': '30px', color: '#000' }}>{icon.alt}</span>
				</div>
			))}
		</div>
	);
}


export default function MyComponent() {
	return (
		<Marquee 
			phrase1={renderIcons()} 
			phrase2={""} 
		/>
	);
}
