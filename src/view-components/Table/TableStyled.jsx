import {
  StyledAvatar,
  StyledBadge,
  StyledCheck,
  StyledTextField,
  StyledTableControl,
  StyledTableName,
  StyledTableHead,
  StyledTableRow,
  StyledTableCell,
  StyledTableBody,
  StyledDataTableCell,
  StyledTable,
  StyledIcon,
} from '../../components';

const TableStyled = () => (
  <StyledTable
    tableStyle="filled"
    hover
    tableControlComponent={
      <StyledTableControl>
        <StyledTableName badgeNumber="100">Test table</StyledTableName>
        <StyledTextField controlId="search" placeholder="search" showDefaultIcon />
      </StyledTableControl>
    }
  >
    <StyledTableHead>
      <StyledTableRow>
        <StyledTableCell align="center" width="60px">
          <StyledCheck id="header-check" size="sm" />
        </StyledTableCell>
        <StyledTableCell width="50%">Study name</StyledTableCell>
        <StyledTableCell>Study short name</StyledTableCell>
        <StyledTableCell>Phase</StyledTableCell>
        <StyledTableCell align="center" width="60px">
          <StyledIcon>priority_high</StyledIcon>
        </StyledTableCell>
      </StyledTableRow>
    </StyledTableHead>
    <StyledTableBody>
      <StyledTableRow>
        <StyledTableCell align="center">
          <StyledCheck id="check-1" size="sm" />
        </StyledTableCell>
        <StyledTableCell>
          <StyledAvatar
            src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
            size="sm"
          />
          Clinical and Radiological Evaluation of Patients With Vertebrobasilar Insufficiency
        </StyledTableCell>
        <StyledTableCell>Sinus pressure study</StyledTableCell>
        <StyledTableCell>
          <StyledBadge size="sm" type="default">
            19
          </StyledBadge>
        </StyledTableCell>
        <StyledTableCell align="center">
          <StyledIcon>priority_high</StyledIcon>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell align="center">
          <StyledCheck id="check-2" size="sm" />
        </StyledTableCell>
        <StyledTableCell>
          <StyledDataTableCell
            img={
              <StyledAvatar
                src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                size="sm"
              />
            }
            subTitle="Vertebrobasilar Insufficiency"
          >
            Clinical and Radiological Evaluation of Patients With
          </StyledDataTableCell>
        </StyledTableCell>
        <StyledTableCell>Sinus pressure study</StyledTableCell>
        <StyledTableCell>
          <StyledBadge size="sm" type="default">
            8
          </StyledBadge>
        </StyledTableCell>
        <StyledTableCell align="center">
          <StyledIcon>priority_high</StyledIcon>
        </StyledTableCell>
      </StyledTableRow>
    </StyledTableBody>
  </StyledTable>
);

export default TableStyled;
