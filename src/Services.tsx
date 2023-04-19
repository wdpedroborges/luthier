import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Services() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="services" variant="scrollable">
			<Tab label="Repair" {...a11yProps(0)} />
			<Tab label="Maintenance" {...a11yProps(1)} />
			<Tab label="Customization" {...a11yProps(2)} />
			<Tab label="Restoration" {...a11yProps(3)} />
			<Tab label="Building" {...a11yProps(4)} />
        </Tabs>
      </Box>
			<TabPanel value={value} index={0}>
				<span className="services-div">
					<span>A luthier can repair various issues with an instrument such as cracks, scratches, and broken parts. They have the expertise to identify and fix issues with the instrument's structure and functionality. They may also re-glue loose parts, replace worn-out strings, and re-fret the fingerboard if necessary.</span>
					<img src="image1.jpg"/>
				</span>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<span className="services-div">
					<span>Regular maintenance is essential to keep an instrument in good condition. A luthier can provide services such as cleaning, polishing, and oiling to keep the instrument looking and sounding its best. They can also perform setup adjustments, such as adjusting the action and intonation, to optimize the instrument's playability.</span>
					<img src="image2.jpg"/>
				</span>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<span className="services-div">
					<span>A luthier can customize an instrument to suit the player's preferences. This can include modifications such as changing the type of pickups, adding inlays or engravings, or installing a custom finish. They can work with the player to create a unique instrument tailored to their needs and tastes.</span>
					<img src="image3.jpg"/>
				</span>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<span className="services-div">
					<span>A luthier can restore an older or antique instrument to its original condition. This can involve repairing damage, replacing missing parts, and refinishing the instrument. The goal is to preserve the instrument's original character and history while ensuring it is playable and functional.</span>
					<img src="image4.jpg"/>
				</span>
			</TabPanel>
			<TabPanel value={value} index={4}>
				<span className="services-div">
					<span>Luthiers can build instruments from scratch, using traditional techniques and high-quality materials. They can create custom instruments or replicate classic designs, and can work with the player to ensure the final product meets their needs and preferences. Building an instrument involves many steps, from selecting the wood to shaping the body, and requires a high level of skill and expertise.</span>
					<img src="image5.jpg"/>
				</span>
			</TabPanel>
    </Box>
  );
}