import { Github } from '@styled-icons/bootstrap/Github';
import { Twitter } from '@styled-icons/bootstrap/Twitter';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import React from 'react';
import AppFooter, { Anchor, CopyRight, IconsContainer } from './Footer';
type Props = {};

const Footer: React.FC = (props: Props) => {
	return (
		<AppFooter>
			<CopyRight>copyright &copy; 2022 - saad elsabahy</CopyRight>
			<IconsContainer>
				<Anchor href='https://github.com/saadelsabahy'>
					<Github size={'30'} />
				</Anchor>

				<Anchor href='https://www.linkedin.com/in/saad-elsabahy-095699198/'>
					<LinkedinSquare size={'30'} />
				</Anchor>
				<Anchor href='https://twitter.com/SaadElsabahy'>
					<Twitter size={'30'} />
				</Anchor>
			</IconsContainer>
		</AppFooter>
	);
};

export default Footer;
