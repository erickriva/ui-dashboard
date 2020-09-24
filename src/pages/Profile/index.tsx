import React from "react";
import { ArrowRight, Plus, ThreeDotsVertical } from "react-bootstrap-icons";
import { v4 as uuid } from "uuid";

import { Button } from "../../components/Button";
import Card from "../../components/Card";
import { DropdownMenu } from "../../components/Dropdown";
import Flex from "../../components/Flex";
import Title from "../../components/Title";
import DefaultLayout from "../../layouts/DefaultLayout";

import {
	ProfileImage,
	ProfileData,
	ProfileNameContainer,
	ProfileName,
	ProfileOccupation,
	Separator,
	Number,
	Description,
	Friend,
	FriendsList,
	FriendsTitle,
	MoreFriends,
	FriendsSeeMore,
	FriendsTitleContainer,
	BiographyContent,
	BiographyItem,
	BiographyTitle,
	BiographyLink,
	BiographyBadge,
	BiographyBadgesContainer,
	PostsList,
	Posts,
	Post,
	PostContent,
	PostDate,
	PostUserPicture,
	PostContentContainer,
	ProfileDataBackgroundImage,
	FriendsListContainer,
	PostsTitle,
	ProfileImageAndNameContainer,
	AddFriendButton,
	ProfileButtonsContainer,
	PostCard,
	StatsContainer,
	RightContent,
	OverflowButton
} from "./styles";

const Profile: React.FC = () => {
	return (
		<DefaultLayout>
			<Flex>
				<Flex flexGrow={4} flexDirection="column">
					<ProfileData>
						<ProfileDataBackgroundImage src="https://www.idealmarketing.com.br/blog/wp-content/uploads/2018/06/editar-imagens.jpg" />

						<ProfileImageAndNameContainer>
							<ProfileImage src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Wayfarers&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Brown&clotheType=Hoodie&clotheColor=PastelYellow&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light" />

							<ProfileNameContainer>
								<ProfileName>Herman Meier</ProfileName>
								<ProfileOccupation>Art Director</ProfileOccupation>
							</ProfileNameContainer>
						</ProfileImageAndNameContainer>

						<RightContent>
							<StatsContainer>
								<Flex>
									<Flex
										gap={0}
										flexGrow={1}
										flexDirection="column"
										justifyContent="center"
										style={{ textAlign: "center" }}>
										<Number>48300</Number>
										<Description>likes</Description>
									</Flex>
									<Flex
										gap={0}
										flexGrow={1}
										flexDirection="column"
										justifyContent="center"
										style={{ textAlign: "center" }}>
										<Number>1 mi</Number>
										<Description>fans</Description>
									</Flex>
								</Flex>
							</StatsContainer>

							<ProfileButtonsContainer>
								<AddFriendButton>Add as friend</AddFriendButton>

								<DropdownMenu
									options={[
										{
											text: "See friendship",
											onClick: () => {}
										}
									]}>
									<OverflowButton>
										<ThreeDotsVertical />
									</OverflowButton>
								</DropdownMenu>
							</ProfileButtonsContainer>
						</RightContent>
					</ProfileData>

					<Flex gap={32}>
						<Flex flexDirection="column" padding="0 0 16px 0">
							<Posts>
								<Title title="My posts" />
								<PostsList>
									{[...Array(8)].map(item => (
										<PostCard key={uuid()}>
											<Post>
												<PostUserPicture />
												<PostContentContainer>
													<PostContent>
														Here goes the Post content. It may be short or long. May be util
														or not. Good or bad. But surely here will be the Content.
													</PostContent>
													<PostDate>{new Date().toLocaleString()}</PostDate>
												</PostContentContainer>
											</Post>
										</PostCard>
									))}
								</PostsList>
							</Posts>
						</Flex>

						<Flex flex="0 0 30%" flexDirection="column">
							<Flex flexDirection="column" style={{ position: "sticky", top: 0 }}>
								<Title title="Biography" />
								{/* <FriendsListContainer>
									<FriendsList>
										<Friend src="https://avataaars.io/?avatarStyle=Transparent&topType=Eyepatch&facialHairType=Blank&clotheType=Overall&clotheColor=Pink&eyeType=Squint&eyebrowType=RaisedExcited&mouthType=Tongue&skinColor=Brown" />
										<Friend src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Platinum&facialHairType=MoustacheMagnum&facialHairColor=Auburn&clotheType=CollarSweater&clotheColor=Black&eyeType=WinkWacky&eyebrowType=UpDown&mouthType=Serious&skinColor=Light" />
										<Friend src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraightStrand&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=Blank&facialHairColor=Platinum&clotheType=Overall&clotheColor=PastelBlue&eyeType=Side&eyebrowType=Default&mouthType=Smile&skinColor=Light" />
										<Friend src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraightStrand&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=Blank&facialHairColor=Platinum&clotheType=Overall&clotheColor=PastelBlue&eyeType=Side&eyebrowType=Default&mouthType=Smile&skinColor=Light" />
										<Friend src="https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat4&accessoriesType=Kurt&hatColor=PastelBlue&hairColor=Brown&facialHairType=BeardMagestic&facialHairColor=Red&clotheType=BlazerShirt&clotheColor=PastelYellow&eyeType=Surprised&eyebrowType=FlatNatural&mouthType=Sad&skinColor=DarkBrown" />
										<Friend src="https://avataaars.io/?avatarStyle=Transparent&topType=Eyepatch&facialHairType=Blank&clotheType=Overall&clotheColor=Pink&eyeType=Squint&eyebrowType=RaisedExcited&mouthType=Tongue&skinColor=Brown" />
										<Friend src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Platinum&facialHairType=MoustacheMagnum&facialHairColor=Auburn&clotheType=CollarSweater&clotheColor=Black&eyeType=WinkWacky&eyebrowType=UpDown&mouthType=Serious&skinColor=Light" />
										<MoreFriends>+15</MoreFriends>
									</FriendsList>
									<FriendsTitleContainer>
										<FriendsSeeMore>
											See more <ArrowRight />
										</FriendsSeeMore>
									</FriendsTitleContainer>
								</FriendsListContainer> */}

								<BiographyItem>
									{/* <BiographyTitle>Biography</BiographyTitle> */}
									<BiographyContent>
										I think that i need to write a biography here. But i don't have years enough to
										write a full biography. So this is all the biography i have.
									</BiographyContent>
								</BiographyItem>

								<BiographyItem>
									<BiographyTitle>Website</BiographyTitle>
									<BiographyContent>
										<BiographyLink href="http://mywebsite.com">mywebsite.com</BiographyLink>
									</BiographyContent>
								</BiographyItem>

								<BiographyItem>
									<BiographyTitle>Skills</BiographyTitle>
									<BiographyContent>
										<BiographyBadgesContainer>
											<BiographyBadge>Gambiarra</BiographyBadge>
											<BiographyBadge>CSS3</BiographyBadge>
											<BiographyBadge>ReactJS</BiographyBadge>
											<BiographyBadge>React Native</BiographyBadge>
											<BiographyBadge>Styled-Components</BiographyBadge>
										</BiographyBadgesContainer>
									</BiographyContent>
								</BiographyItem>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</DefaultLayout>
	);
};

export default Profile;
