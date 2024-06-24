import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});




 test('test that App component doesn\'t render dupicate Task', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText('mm/dd/yyyy');
  const dueDate="05/30/2023";
  const submit = screen.getByRole('button',{name:/Add/i})
  fireEvent.change(inputTask,{target:{value:"History Test"}});
  fireEvent.change(inputDate, {target:{value:dueDate}});
  fireEvent.click(submit);
  fireEvent.change(inputTask,{target:{value:"History Test"}});
  fireEvent.change(inputDate, {target:{value:dueDate}});
  fireEvent.click(submit);
  const check = screen.getAllByText(/History Test/i);
  expect(check.length).toBe(1);
 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText('mm/dd/yyyy');
  const dueDate="05/30/2023";
  const submit = screen.getByRole('button',{name:/Add/i})
  fireEvent.change(inputTask,{target:{value:""}});
  fireEvent.change(inputDate, {target:{value:dueDate}});
  fireEvent.click(submit);
  const check = screen.queryByText(/History Test/i);
  expect(check).toBeNull();
 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText('mm/dd/yyyy');
  const dueDate="";
  const submit = screen.getByRole('button',{name:/Add/i})
  fireEvent.change(inputTask,{target:{value:"History Test"}});
  fireEvent.change(inputDate, {target:{value:dueDate}});
  fireEvent.click(submit);
  const check = screen.queryByText(/History Test/i);
  expect(check).toBeNull();
 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText('mm/dd/yyyy');
  const dueDate="05/30/2023";
  const submit = screen.getByRole('button',{name:/Add/i})
  fireEvent.change(inputTask,{target:{value:"History Test"}});
  fireEvent.change(inputDate, {target:{value:dueDate}});
  fireEvent.click(submit);
  const del = screen.getByRole('checkbox');
  fireEvent.click(del);
  const check = screen.queryByText(/History Test/i);
  expect(check).toBeNull();
 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText('mm/dd/yyyy');
  const dueDate="05/30/2023";
  const submit = screen.getByRole('button',{name:/Add/i})
  fireEvent.change(inputTask,{target:{value:"History Test"}});
  fireEvent.change(inputDate, {target:{value:dueDate}});
  fireEvent.click(submit);
  const historyCheck = screen.getByTestId(/History Test/i).style.background
  expect(historyCheck).toBe("red");
  const inputTask2 = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate2 = screen.getByPlaceholderText('mm/dd/yyyy');
  const dueDate2="05/30/2027";
  const submit2 = screen.getByRole('button',{name:/Add/i})
  fireEvent.change(inputTask2,{target:{value:"History Test2"}});
  fireEvent.change(inputDate2, {target:{value:dueDate2}});
  fireEvent.click(submit2);
  const historyCheck2 = screen.getByTestId(/History Test2/i).style.background
  expect(historyCheck2).toBe("rgba(255, 255, 255, 1)");
 });
