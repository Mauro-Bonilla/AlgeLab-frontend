
import { Box, Typography, Avatar} from '@mui/material';

import userimg from '../../../assets/images/users/user-1.svg';

const ProfileDropdown = () => (
  <Box>
    <Box
      sx={{
        pb: 3,
        mt: 3,
      }}
    >
      <Box display="flex" alignItems="center">
        <Avatar
          src={userimg}
          alt={userimg}
          sx={{
            width: '90px',
            height: '90px',
          }}
        />
        <Box
          sx={{
            ml: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              lineHeight: '1.235',
            }}
          >
            Mauro Bonilla
          </Typography>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            Estudainte
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default ProfileDropdown;
