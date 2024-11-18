'use client'
import { useRef, ReactNode } from 'react';
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { Box } from '@mui/material';

// Cambiado para aceptar un array de ReactNode o un string
interface ParallaxProps {
	children: ReactNode | ReactNode[];
	baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 2 }: ParallaxProps) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [5, 10], {
		clamp: false,
	});

	const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);

	const directionFactor = useRef<number>(1);

	
	useAnimationFrame((t, delta) => {
		const currentVelocityFactor = velocityFactor.get();
		let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

		if (currentVelocityFactor < 0) {
			directionFactor.current = -1;
		} else if (currentVelocityFactor > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * currentVelocityFactor;
		baseX.set(baseX.get() + moveBy);
	});

	const spanCount = 30;
	const spanStyles = {
		x,
		marginLeft: '50px',
	/* 	background: 'linear-gradient(0deg, #A0730C 0%, #E2C98F 50%,  #FFFFFF 100%)',
		WebkitBackgroundClip: 'text',
		backgroundClip: 'text', */
		color: 'transparent',
		display: 'inline-block',
	};

	return (
		<Box
			sx={{
				overflow: 'hidden',
				letterSpacing: '-2px',
				lineHeight: '63px',
				fontWeight: 400,
				fontSize: '53px',
				fontFamily: 'Raleway',
        background: '#A0730C'
			}}
		>
			<motion.div style={{ x, whiteSpace: 'nowrap', width: '100%' }}>
				{Array.from({ length: spanCount }).map((_, index) => (
					<motion.span key={index} style={spanStyles}>
						{children}
					</motion.span>
				))}
			</motion.div>
		</Box>
	);
}

interface ParallaxTextProps {
	phrase1: ReactNode | ReactNode[]; // Acepta texto o lista de elementos React
	phrase2: ReactNode | ReactNode[]; // Acepta texto o lista de elementos React
}

export default function ParalaxText({ phrase1 }: ParallaxTextProps) {
	return (
		<>
			<ParallaxText baseVelocity={-2}>{phrase1}</ParallaxText>
		</>
	);
}

