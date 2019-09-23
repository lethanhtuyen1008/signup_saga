import { Form, Icon, Input, Button, Checkbox, Radio } from 'antd';
import { isMobilePhone } from 'validator';
import React, { Component } from 'react';
import { connect } from "react-redux";
import *as actions from '../actions/index';
//import axios from 'axios';


class SignUp extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.

  }

  handleSubmit = e => {
    this.props.form.validateFields();
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.props.onSignUp(values);
    });
  };
  checkPhoneNumber = (rules, values, callback) => {
    if (!values) {
      callback('Please input the phone number')
    }
    else if (!isMobilePhone(values, 'vi-VN')) {
      callback('invalid phone number');
    }
    else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    //var { user } = this.props;
    //console.log("dispatch: ", user);
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">

        <Form.Item className="col-first_name">
          {getFieldDecorator('first_name', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First name"
            />,
          )}
        </Form.Item>

        <Form.Item className="col-last_name">
          {getFieldDecorator('last_name', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last name"
            />,
          )}
        </Form.Item>

        <Form.Item className="col-phone_number">
          {getFieldDecorator('phone_number', {
            rules: [
              { validator: this.checkPhoneNumber }]
          })(
            <Input
              prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Phone number"
            />,
          )}
        </Form.Item>

        <Form.Item className="col-gender">
          {getFieldDecorator('gender', {

            rules: [{ required: true, message: 'Please input your last name!' }],

          })(
            <Radio.Group name="radiogroup" >

              <Radio value={1}>Nam</Radio>
              <Radio value={2}>Nữ</Radio>

            </Radio.Group>
          )}
        </Form.Item>


        <Form.Item className="col-email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your Email!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="Email"
              placeholder="Email"
            />,
          )}
        </Form.Item>

        <Form.Item className="col-password">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>



        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button" >
            Sing Up
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispachToProps = dispatch => {
  return {
    onSignUp: (user) => dispatch(actions.SignUp(user)),
  };
};
const WrappedSignUpForm = Form.create()(SignUp);

export default connect(
  mapStateToProps,
  mapDispachToProps
)(WrappedSignUpForm);