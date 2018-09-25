import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import {
    informationBoxStyle, topContainer
} from './styles'
export default class Profile extends React.Component {
    render() {
        const { myProfile, profile } = this.props
        return (
            <View>
                <View style={topContainer.topContainer} >

                    {myProfile === true ?
                        <TouchableOpacity >
                            <Image
                                source={{ uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350' }}
                                style={topContainer.topImage} />
                        </TouchableOpacity> :
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350' }}
                            style={topContainer.topImage} />
                    }
                    )
                    }
                </View>
                <InformationBox
                    title={'Occupation'}
                    subtitle={profile.occupation}
                    discription={profile.company + ' ' + profile.department + ' ' + profile.rank}
                    myProfile={myProfile}
                />
                <InformationBox
                    title={'Mobile'}
                    discription={profile.company + ' ' + profile.department + ' ' + profile.rank}
                    myProfile={myProfile}
                />
                <InformationBox
                    title={'Email'}
                    discription={profile.company + ' ' + profile.department + ' ' + profile.rank}
                    myProfile={myProfile}
                />

                <InformationBox
                    title={'Address'}
                    discription={profile.company + ' ' + profile.department + ' ' + profile.rank}
                    myProfile={myProfile}
                />
                <View style={informationBoxStyle.none} />
                <InformationBox
                    title={'Additional Information'}
                    discription={profile.company + ' ' + profile.department + ' ' + profile.rank}
                    myProfile={myProfile}
                />i

            </View>

        )
    }

}

class InformationBox extends React.Component {
    render() {
        const { title, subtitle, discription, myProfile } = this.props
        if (myProfile)
            return (
                <TouchableOpacity style={informationBoxStyle.container} >
                    <View style={informationBoxStyle.titleBar} >
                        <Text style={informationBoxStyle.titleSt} > {title} </Text>
                        {
                            subtitle === undefined ?
                                null :
                                <Text style={informationBoxStyle.subtitleSt} >{subtitle} </Text>
                        }
                    </View>
                    <Text style={informationBoxStyle.discriptionSt} > {discription} </Text>
                </TouchableOpacity>
            )
        else
            return (
                <View style={informationBoxStyle.container} >
                    <View style={informationBoxStyle.titleBar} >
                        <Text style={informationBoxStyle.titleSt} > {title} </Text>
                        {
                            subtitle === undefined ?
                                null :
                                <Text style={informationBoxStyle.subtitleSt} >{subtitle} </Text>
                        }
                    </View>
                    <Text style={informationBoxStyle.discriptionSt} > {discription} </Text>
                </View>
            )
    }
}