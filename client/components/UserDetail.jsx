import React, { useState, useEffect } from 'react';
import { fetchUserDetail } from '../Model/model';
import { header } from '../const';
import Loader from './Loader';
import infoImage from '../assets/image/info.svg';

const UserDetail = ({ match }) => {
  const { id } = match.params;
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDetail = async () => {
    const result = await fetchUserDetail(id);
    setUserDetail(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return !loading ? (
    <table className="user-detail">
      <thead />
      <tbody>
        <tr>
          <td colSpan="2">{userDetail.data.name}</td>
        </tr>
        <tr>
          <td rowSpan="8">
            <img src={infoImage} />
          </td>
        </tr>
        <tr>
          <td data-td={header.Name}>{`  ${userDetail.data.name}`}</td>
        </tr>
        <tr>
          <td data-td={header.Username}>{`  ${userDetail.data.username}`}</td>
        </tr>
        <tr>
          <td data-td={header.Website}>{`  ${userDetail.data.website}`}</td>
        </tr>
        <tr>
          <td data-td={header.Email}>{`  ${userDetail.data.email}`}</td>
        </tr>
        <tr>
          <td data-td={header.PhoneNumber}>{`  ${userDetail.data.phone}`}</td>
        </tr>
        <tr>
          <td data-td={header.Address}>{`  ${userDetail.data.address.suite},${
            userDetail.data.address.street
          }`}</td>
        </tr>
        <tr>
          <td data-td={header.Company}>{`  ${userDetail.data.company.name}`}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <Loader />
  );
};

export default UserDetail;
