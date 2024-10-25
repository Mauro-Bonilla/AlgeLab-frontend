// src/components/GitHubLabButton.jsx
import React from 'react';
import { useAuth } from '../../../context/AuthContext/AuthContext';
import CustomButton from '../../../components/buttons/CustomButton';
import { useTheme } from '@mui/material';
import { darken } from '@mui/material/styles';

const GitHubLabButton = ({ labUrl }) => {
  const { user } = useAuth();
  const theme = useTheme();
  const githubColor = '#24292e';

  const handleLabClick = () => {
    if (!user) {
      alert('Please login with GitHub first to access the lab');
      return;
    }
    
    // Extract the repository path from the full GitHub URL if provided
    const repoPath = labUrl.includes('github.com') 
      ? labUrl.split('github.com/')[1].replace('.git', '') 
      : labUrl.replace('.git', '');
    
    // Construct URL with specific configuration
    const codespaceUrl = new URL('https://github.com/codespaces/new');
    const params = new URLSearchParams({
      'hide_repo_select': 'true',
      'ref': 'main',
      'repo': repoPath,
      'machine': '2-core',  // Free tier machine
      'devcontainer_path': '.devcontainer/devcontainer.json',
      'location': 'WestUs2',  // Default region
    });
    
    // Open the configured Codespace
    window.open(`${codespaceUrl}?${params.toString()}`, '_blank');
  };

  return (
    <div style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}>
      <CustomButton
        color="primary"
        size="medium"
        icon="github"
        onClick={handleLabClick}
        disabled={!user}
        fontColor="#FFFFFF"
        fontSizeScale={0.1}
        iconSizeScale={0.5}
        widthScale={1.3}
        heightScale={1}
        sx={{
          backgroundColor: githubColor,
          '&:hover': {
            backgroundColor: darken(githubColor, 0.2),
          },
          '&:disabled': {
            backgroundColor: `${githubColor}80`,
          }
        }}
      >
        Ir al Laboratorio
      </CustomButton>
    </div>
  );
};

export default GitHubLabButton;