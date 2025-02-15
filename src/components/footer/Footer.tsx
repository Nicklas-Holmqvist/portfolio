import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Grid, IconButton, Typography } from '@mui/material';

import { motion } from 'framer-motion';

export const Footer = () => {
  const date = new Date();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 1400,
        width: '100%',
        margin: '0 auto',
        padding: '16px 0',
      }}
    >
      <Grid
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ pb: 1 }}
      >
        <a
          href="https://www.instagram.com/nicklas.holmqvist"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            aria-label="instagram"
            sx={{
              m: {
                xs: 1,
              },
            }}
          >
            <InstagramIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="https://github.com/Nicklas-Holmqvist"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            aria-label="github"
            sx={{
              m: {
                xs: 1,
              },
            }}
          >
            <GitHubIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/nicklas-holmqvist-b96b901a8/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            aria-label="linkedin"
            sx={{
              m: {
                xs: 1,
              },
            }}
          >
            <LinkedInIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="mailto:nicklas_holmqvist@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            aria-label="email"
            sx={{
              m: {
                xs: 1,
              },
            }}
          >
            <MailOutlineIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="https://www.facebook.com/glomd.varld.marks.harad"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            aria-label="facebook"
            sx={{
              m: {
                xs: 1,
              },
            }}
          >
            <FacebookIcon color="primary" />
          </IconButton>
        </a>
      </Grid>
      <Grid item display="flex" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontSize: {
              xs: 12,
            },
            mb: {
              xs: 2,
              md: 0,
            },
            px: {
              xs: 2,
            },
          }}
        >
          Copyright © | {date.getFullYear()} - Nicklas Holmqvist - All rights
          reserved
        </Typography>
      </Grid>
      {/* {showToTop && <ScrollToTop />} */}
    </motion.div>
  );
};
