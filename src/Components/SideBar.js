import React from 'react';
import Left from 'react-icons/lib/fa/angle-left';
import Nike from 'react-icons/lib/fa/check';
import Slider from 'rc-slider';
import { LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Side, BlueDiv, SideTitle, SubText, WhiteText, ButtonBlock, Button, SmIcon, BlueCard, SubTitle, Block, GreenIcon, DeviceName } from './StyledComponents';

import 'rc-slider/assets/index.css';

const linedata = [{ X: 3000 }, { X: 5890 }, { X: 390 }, { X: 3780 }, { X: 1490 }, { X: 8000 }, { X: 1000 },];
const piedata = [{ name: 'A', value: 5 }, { name: 'B', value: 1.7 }];

const COLORS = ['#fff', '#15bdf4'];
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPie: [],
      dataLine: [],
    };
    setInterval(() => {
      this.change();
    }, 2500);
  }
  change() {
    this.setState({
      dataPie: piedata,
      dataLine: linedata,
    });
  }

  render() {
    return (
      <Side>
        <BlueDiv>
          <SmIcon><Left /></SmIcon>
          <div>
            <SideTitle>Cloud VPN Full</SideTitle>
            <WhiteText>20 MB/s 50 users</WhiteText>
          </div>
        </BlueDiv>
        <ButtonBlock>
          <Button blue>Upgrade</Button>
          <Button>Download Client</Button>
        </ButtonBlock>
        <BlueCard>
          <SubTitle>Monthly usage breakdown</SubTitle>
          <Block circle row>

            <PieChart width={100} height={80}>
              <Pie
                data={this.state.dataPie} cx={40} cy={40} outerRadius={40} fill="#51c0e4" startAngle={450} endAngle={90}
              >
                {
                  this.state.dataPie.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
            </PieChart>
            <div>
              <SubText blue>1.7GB used</SubText>
              <SubText>Total 5Gb</SubText>
            </div>

          </Block>
        </BlueCard>
        <BlueCard>
          <SubTitle>Performance at Location</SubTitle>
          <Slider min={1} max={24} defaultValue={8} step={1} />
          <Block top>
            <SubText>Internet traffic</SubText>
            <LineChart width={270} height={100} data={this.state.dataLine}>
              <Line type="monotone" dataKey="X" stroke="#51c0e4" />
            </LineChart>
          </Block>
        </BlueCard>
        <BlueCard>
          <SubTitle>Devices at Location</SubTitle>
          <Block>
            <DeviceName>
              <GreenIcon><Nike /></GreenIcon>
              <SubTitle>ZAGREB-1-001</SubTitle>
            </DeviceName>
            <DeviceName>
              <GreenIcon orange><Nike /></GreenIcon>
              <SubTitle>ZAGREB-2-202</SubTitle>
            </DeviceName>
          </Block>
        </BlueCard>
      </Side>
    );
  }
}

export default SideBar;
