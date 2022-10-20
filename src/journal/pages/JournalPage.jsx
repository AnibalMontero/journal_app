import { useDispatch, useSelector } from 'react-redux';
import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { journalSlice, startNewNote } from '../../store/journal';

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);

  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        obcaecati iste dolore magni quis, doloremque explicabo, sed totam ipsum,
        consequuntur soluta ut non distinctio illum rem. Consequatur perferendis
        voluptates omnis!
      </Typography> */}
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        size='large'
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
