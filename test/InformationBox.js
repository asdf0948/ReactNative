import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { informationBoxStyles, informationBoxHeaderStyles } from './styles';

export default class InformationBox extends React.Component {
  state = { clicked: false }

  onClick = () => this.setState({ clicked: !this.state.clicked })

  render() {
    const img = {
      uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA7VBMVEUADzvN+vAA5rkAHlUAADgACzoA67wADjkAAC4AACwAADQAACoA9MIAADAAHFQAADIAACcAQFAAy6cAACIAAE4A2rEAF0gAAB8A37QApIwA0KrU//cAnIcAu5wAGVQAdW4Af3QAElAvO1MAZGMAFjsDbnYAAEgATVYAXV8ZIUO85d+dvr1rg4uYzcbc//tm7c2v9eUAkoAAIUAAKEQAMEZDUmMAABVbbnqu1M8AiHkArpIAVVrU1t0De3yIpKd779MDJldIUHSW9N0DRmN4kZeSlqliZ4MzPmcAOl5/gpcpNWIBW2xNXmxJ6sUJi4XRpyB1AAAD4UlEQVRYhe2Xe3OiSBTFhcDl0Y08BMNDjMaMGs1mguNsErOZZDO7O5nd7Hz/j7OXh4hAaEzV/LFVuVYpdFX/OOf0g7bTea/3+skl4aefVXLzVk6/f1Sofv9NJEkqULrDjCUdzJI6BS3db3+Ns8tD/Ul7poa//xmDhqmog0BH+zWcJrhuKurtnMzgY/foMJJUy0HS9qKlO6Ff7rsldMd2UoLeijMb7zonbrp/JzdD2/4nCn2ef7i6bkES9Y297dx9TBDj7+MY8+y5FIB/4gKOM0QmSB94dj5E3VQXcuxHDyGoJsZwwReFLQgG9tbaNI/KvudjDH8VY+LSWZLUWxraWXf7t4w0noYJZscJ/tAYIOIDb+fjnF7YX90Sh+MWxwxna+DhPreUwKb3NMHwH3ccLjhVm52d4LPdnaR4tLyMw3OFCi6aZ4DuIQhCe5in/OxDxnkIiqRl87jJSapgPdrDLu5CU/sHbDl7gjjuptcIIk7SB/jo69S2n384CReqglhpEzd7PIDruCkBPnyAiiCOawkqFEynCPo3KIFaWdsvy4/n0GGKFKsGVBM1ZtSsSNtAPeeh7GxJGkFq9Aqo7Cz40rzYhLt6UCXq4KV5iXTkekFP5Yg4o5nT0bxaSWVBrIjQm0lrOE8VZ58ZznAmWTWSKsZuGNvRK5IqY3/JFoRxV1OqGFs2z8a0RK283ioJLQj7bZSYA4YgxjablzrfI1Um9YvcjoOTqUgqGwuumS/H3JtYmAIlTsB9bssRZdPdca72OZdLqdVJBDEqGWwxAB9LrhYvvVbjhZxVlL02ACD85TLIBQVBcHP9a8vhwngmnhUzwA1HK7l3frFcxMePgFssL857rTExSVcUab3uEFkV47MJOSbnp6fn+MM8f9T4wyreCsLhjJ9UolpOpdrSivMpGqmMllaFW5OvMFpeVyHuvuJuJAsaE09bLCW9YZR0Jokd4ewMe0lnInbT5+v4Baav5qaGzQlIl+5MrRmlmhQ0YUbpTNCArkzqAqWe3NEiSqkFrhGDtBE2OutmkmLRiYInak+Z0JAg1vJ4eqJNqBvhDuzEIHJHnZMInOY3rTqim57rOK6xoSeozyFkREMjpHPZ8CAB9TwYTOY+im4CiRLwJo0GdOaCnoY9p2HPgrWA59QEdIynQ1zYMGn2hodIi5ozDGSjJYMdg1Be1DOsTNGA3h4bK4WxbIQJBZ/IDtC5kIMUDMvHfzQuWVHH+AQ0DOmAtcHJljVS1ZEV6qK49lHWzB/o6gyH7NYKZf0WJroZ4l7VHFFCknERqLIsxt84NIKMzxYUQrANm4iKLQaRmZz3+h/Uf4UYVnMMCyoTAAAAAElFTkSuQmCC'
    };
    const down = {
      uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA7VBMVEUADzvN+vAA5rkAHlUAADgACzoA67wADjkAAC4AACwAADQAACoA9MIAADAAHFQAADIAACcAQFAAy6cAACIAAE4A2rEAF0gAAB8A37QApIwA0KrU//cAnIcAu5wAGVQAdW4Af3QAElAvO1MAZGMAFjsDbnYAAEgATVYAXV8ZIUO85d+dvr1rg4uYzcbc//tm7c2v9eUAkoAAIUAAKEQAMEZDUmMAABVbbnqu1M8AiHkArpIAVVrU1t0De3yIpKd779MDJldIUHSW9N0DRmN4kZeSlqliZ4MzPmcAOl5/gpcpNWIBW2xNXmxJ6sUJi4XRpyB1AAAD4UlEQVRYhe2Xe3OiSBTFhcDl0Y08BMNDjMaMGs1mguNsErOZZDO7O5nd7Hz/j7OXh4hAaEzV/LFVuVYpdFX/OOf0g7bTea/3+skl4aefVXLzVk6/f1Sofv9NJEkqULrDjCUdzJI6BS3db3+Ns8tD/Ul7poa//xmDhqmog0BH+zWcJrhuKurtnMzgY/foMJJUy0HS9qKlO6Ff7rsldMd2UoLeijMb7zonbrp/JzdD2/4nCn2ef7i6bkES9Y297dx9TBDj7+MY8+y5FIB/4gKOM0QmSB94dj5E3VQXcuxHDyGoJsZwwReFLQgG9tbaNI/KvudjDH8VY+LSWZLUWxraWXf7t4w0noYJZscJ/tAYIOIDb+fjnF7YX90Sh+MWxwxna+DhPreUwKb3NMHwH3ccLjhVm52d4LPdnaR4tLyMw3OFCi6aZ4DuIQhCe5in/OxDxnkIiqRl87jJSapgPdrDLu5CU/sHbDl7gjjuptcIIk7SB/jo69S2n384CReqglhpEzd7PIDruCkBPnyAiiCOawkqFEynCPo3KIFaWdsvy4/n0GGKFKsGVBM1ZtSsSNtAPeeh7GxJGkFq9Aqo7Cz40rzYhLt6UCXq4KV5iXTkekFP5Yg4o5nT0bxaSWVBrIjQm0lrOE8VZ58ZznAmWTWSKsZuGNvRK5IqY3/JFoRxV1OqGFs2z8a0RK283ioJLQj7bZSYA4YgxjablzrfI1Um9YvcjoOTqUgqGwuumS/H3JtYmAIlTsB9bssRZdPdca72OZdLqdVJBDEqGWwxAB9LrhYvvVbjhZxVlL02ACD85TLIBQVBcHP9a8vhwngmnhUzwA1HK7l3frFcxMePgFssL857rTExSVcUab3uEFkV47MJOSbnp6fn+MM8f9T4wyreCsLhjJ9UolpOpdrSivMpGqmMllaFW5OvMFpeVyHuvuJuJAsaE09bLCW9YZR0Jokd4ewMe0lnInbT5+v4Baav5qaGzQlIl+5MrRmlmhQ0YUbpTNCArkzqAqWe3NEiSqkFrhGDtBE2OutmkmLRiYInak+Z0JAg1vJ4eqJNqBvhDuzEIHJHnZMInOY3rTqim57rOK6xoSeozyFkREMjpHPZ8CAB9TwYTOY+im4CiRLwJo0GdOaCnoY9p2HPgrWA59QEdIynQ1zYMGn2hodIi5ozDGSjJYMdg1Be1DOsTNGA3h4bK4WxbIQJBZ/IDtC5kIMUDMvHfzQuWVHH+AQ0DOmAtcHJljVS1ZEV6qK49lHWzB/o6gyH7NYKZf0WJroZ4l7VHFFCknERqLIsxt84NIKMzxYUQrANm4iKLQaRmZz3+h/Uf4UYVnMMCyoTAAAAAElFTkSuQmCC'
    };

    return (
      <View style={{ width: '100%', marginBottom: this.props.item.key == '9' ? 100 : 0 }}>

        <TouchableOpacity
          style={informationBoxHeaderStyles.container}
          onPress={this.onClick}
        >
          <Image source={img} style={{ margin: 20, width: 40, height: 40 }} />
          <InformationBoxHeader
            title={this.props.item.title}
            date={this.props.item.date}
          />
          <Image source={down} style={{ margin: 15, width: 20, height: 20 }} />
        </TouchableOpacity>

        {
          this.state.clicked ?
            <Text style={{ borderColor: '#f1f1f1', padding: 22, borderBottomWidth: 0.5, backgroundColor: '#f1f1f1' }}>
              {this.props.item.body}
            </Text>
            : null
        }

      </View>
    );
  }
}

class InformationBoxHeader extends React.Component {
  render() {
    return (
      <View style={{ height: 70, width: 250, justifyContent: 'center' }}>
        <Text style={{ fontSize: 14 }}>{this.props.title}</Text>
        <Text style={{ fontSize: 12 }}>{this.props.date}</Text>
      </View>
    );
  }
}

