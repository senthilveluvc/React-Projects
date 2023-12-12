/* eslint-disable react/no-array-index-key */
// import React from 'react';
// import { Flex, Radio } from 'antd';
// const baseStyle = {
//   width: '25%',
//   height: 54,
// };
// const App = () => {
//   const [value, setValue] = React.useState('horizontal');
//   return (
//     <Flex gap="middle" vertical>
//       <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
//         <Radio value="horizontal">horizontal</Radio>
//         <Radio value="vertical">vertical</Radio>
//       </Radio.Group>
//       <Flex vertical={value === 'vertical'}>
//         {Array.from({
//           length: 4,
//         }).map((_, i) => (
//           <div
//             key={i}
//             style={{
//               ...baseStyle,
//               backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf',
//             }}
//           />
//         ))}
//       </Flex>
//     </Flex>
//   );
// };
// export default App;

// import React, { useState } from "react";
// import { DownloadOutlined, StepBackwardOutlined } from "@ant-design/icons";
// import { Button, Divider, Flex, Radio } from "antd";
// const App = () => {
//   const [size, setSize] = useState("large"); // default is 'middle'
//   return (
//     <>
//       <StepBackwardOutlined />

//       <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
//         <Radio.Button value="large">Large</Radio.Button>
//         <Radio.Button value="default">Default</Radio.Button>
//         <Radio.Button value="small">Small</Radio.Button>
//       </Radio.Group>
//       <Divider orientation="left" plain>
//         Preview
//       </Divider>
//       <Flex gap="small" align="flex-start" vertical>
//         <Flex gap="small" wrap="wrap">
//           <Button type="primary" size={size}>
//             Primary
//           </Button>
//           <Button size={size}>Default</Button>
//           <Button type="dashed" size={size}>
//             Dashed
//           </Button>
//         </Flex>
//         <Button type="link" size={size}>
//           Link
//         </Button>
//         <Flex gap="small" wrap="wrap">
//           <Button type="primary" icon={<DownloadOutlined />} size={size} />
//           <Button
//             type="primary"
//             shape="circle"
//             icon={<DownloadOutlined />}
//             size={size}
//           />
//           <Button
//             type="primary"
//             shape="round"
//             icon={<DownloadOutlined />}
//             size={size}
//           />
//           <Button
//             type="primary"
//             shape="round"
//             icon={<DownloadOutlined />}
//             size={size}
//           >
//             Download
//           </Button>
//           <Button type="primary" icon={<DownloadOutlined />} size={size}>
//             Download
//           </Button>
//         </Flex>
//       </Flex>
//     </>
//   );
// };
// export default App;

import React from "react";
import { DatePicker } from "antd";
// import "antd/dist/antd";

export default function () {
  return (
    <div>
      <DatePicker />
    </div>
  );
}
