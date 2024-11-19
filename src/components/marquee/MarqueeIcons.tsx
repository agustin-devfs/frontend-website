import Marquee from "./Marquee";
import {icons} from "@/app/core/utils/contants"
import Image from 'next/image';

function renderIcons() {
	return (
		<div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
			{icons.map((icon, index) => (
				<div 
					key={index} 
					style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}
				>
					<Image
						src={icon.src} 
						alt={icon.alt} 
						width={40}
						height={40}
						style={{marginRight: '10px', marginLeft: '10px' }} 
					/>
					<span style={{ fontFamily: 'podkova', fontWeight: '400', lineHeight: '40px', letterSpacing: '1px', fontSize: '30px', color: '#000' }}>{icon.alt}</span>
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
