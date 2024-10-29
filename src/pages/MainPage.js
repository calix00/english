import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Box } from '@mui/system';

function MainPage() {
  return (
    <div>
      {/* 네비게이션 바 */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            로그인
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            회원가입
          </Button>
        </Toolbar>
      </AppBar>

      {/* 메인 콘텐츠 */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box textAlign="center" mt={4}>
          <Typography variant="h3" gutterBottom>
            환영합니다!
          </Typography>
          <Typography variant="body1">
            MyApp에 오신 것을 환영합니다. 로그인하거나 회원가입을 통해 더 많은 기능을 이용해보세요!
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default MainPage;