import styled from 'styled-components';


export const Pointer = styled.div`
  width:6em;
  height:6em;
  border-radius:50px;
  border:0.2em solid rgba(#ffffff, 0.41);
  display:flex;
  justify-content:'center';
  background: rgba(#7acc5a, 0.25);
  box-shadow: 0 5px 20px rgba(69, 84, 83, 0.47);
  `;
export const Point = styled.div`
  width:3em;
  height:3em;
  text-align:center;
  margin:1.5em;
  border-radius:50px;
  border:0.2em solid #fff;
  background: ${props => props.red ? '#f48615' : '#7acc5a'};

  `;


export const Label = styled.p`
  font-weight: 100;
  font-family: 'HelveticaNeue-light';
  color: #fff;
`;

export const Logo = styled.h1`
  margin-top:1em;
  font-size: 2em;
  font-weight: 100;
  font-family: 'HelveticaNeue-light';
  color: #fff;
`;

export const Button = styled.button`
  background: ${props => props.blue ? '#15BDF4' : 'white'};
  color: ${props => props.blue ? 'white' : '#15BDF4'};
  font-weight: 100;
  font-family: 'HelveticaNeue';
  font-size: 0.8em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border: 0px;
  border-radius: 25px;
  &:focus {
    outline:0;
  }
  &:hover {
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
  }
`;


export const SideTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 100;
  font-family: 'HelveticaNeue-light';
  color: #fff;
`;

export const LinkText = styled.p`
  color: ${props => props.active ? '#15bdf4' : '#bababa'};
  font-size: 1em;
  font-weight: 100;
    font-family: 'HelveticaNeue-light';
`;

export const FootText = styled.p`
  color: ${props => props.active ? '#15bdf4' : '#bababa'};
  font-size: 0.8em;
  font-family: 'HelveticaNeue';
`;
export const WhiteText = styled.p`
  color: ${props => props.active ? '#15bdf4' : '#fff'};
  font-size: 0.8em;
  font-family: 'HelveticaNeue';
`;
export const SubTitle = styled.p`
  color: #585858;
  font-size: 0.8em;
  font-family: 'HelveticaNeue';
`;
export const SubText = styled.p`
  color: ${props => props.blue ? '#15bdf4' : '#bababa'};
  font-size: 0.8em;
  font-family: 'HelveticaNeue';
`;

export const Icon = styled.span`
  color: ${props => props.active ? 'white' : '#bababa'};
  background: ${props => props.active ? '#15bdf4' : '#EDF3F6'};
  font-size: ${props => props.small ? '0.5em' : '1em'};
  margin-right:15px;
  border-radius:50%;
  padding:1em;
  align-items:center;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const GreenIcon = styled.span`
  color: white;
  background: ${props => props.orange ? '#f48615' : '#7acc5a'};
  font-size: 0.8em;
  border-radius:50%;
  margin-right:20px;
  padding:1em;
  display:flex;
  ${''/* width:2.4em; */}
    align-items:center;
  justify-content:center;
`;

export const Nav = styled.div`
  display:flex;
  flex-direction:column;
  width:230px;
  text-align: center;
  height:100%;
  background-color:#ffffff;
  justify-content:space-between;
  overflow:scroll;
  box-shadow: 3px 0px 10px rgba(0,0,0,0.15);
  z-index:55;

`;
export const Side = styled.div`
  z-index:55;
  flex-direction:column;
  width:300px;
  height:100%;
  background-color:#edf3f6;
  box-shadow: -3px 0px 10px rgba(0,0,0,0.15);
  overflow:scroll;

`;

export const Foot = styled.div`
  border-top:1px solid #e0e0e0;
  padding: 1em 2em;
  text-align: left
`;

export const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  align-items:stretch
`;

export const MapWrapper = styled.div`
  flex:1
`;
export const ButtonBlock = styled.div`
  display:flex;
  background:#e6ecef;
  padding-left:16px;
`;

export const Block = styled.div`
  display:flex;
  background:#edf3f6;
  border-top:1px solid #e0e0e0;
  padding: ${props => props.circle ? '1em' : ''};
  margin-top: ${props => props.top ? '1em' : ''};
  flex-direction: ${props => props.row ? 'row' : 'column'};
`;

export const SmIcon = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.5em;
  color:#fff;
  margin-top:18px;

`;
export const BlueDiv = styled.div`
  width:100%;
  ${''/* padding:0.5em; */}
  background:rgba(21, 189, 244, 0.78);
  display:flex;
  align-items:flex-start;
  padding: ${props => props.menu ? '0 3em' : '0.5em'};


`;
export const BlueCard = styled.div`
  border-bottom:2px solid #fff;
  width:100%;
  padding:16px;
  background:#edf3f6;
  flex:1;

`;

export const Link = styled.a`
  padding:0.5em 2em;
  margin:1.5em 0;
  display:flex;
  flex-direction:row;
  &:hover{
    background: #edf3f6
  }
`;

export const DeviceName = styled.a`
  padding:1em 0;
  display:flex;
  flex-direction:row;
`;
