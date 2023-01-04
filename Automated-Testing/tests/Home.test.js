import 'isomorphic-fetch'

import { render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { BASE_URL } from '../utils/api/base.js';
import Home from '../pages/index.js'

const TEST_URL = `https://dog.ceo/api/breeds/image/random`
const server = setupServer(
    rest.get(`https://dog.ceo/api/breeds/image/random`, (req, res, ctx) => {
        // respond using a mocked JSON body
        return res(ctx.json(           
            {
                "status":"success",
                "message":TEST_URL
            }  
        ))
    }) 
);
 
beforeAll(() => {
    server.listen();
  });
  
  afterAll(() => {
    server.close();
  });

  test("test if the title renders on home page load", async () => {
    await act(() => {
        render(<Home/>)
    })
    const pageTitle = screen.getByText("Welcome to Dinder")
    
    expect(pageTitle).toBeInTheDocument()
})

test("test if the buttons renders correctly", async () => {
    await act(() => {
        render(<Home/>)
    })
    const nopeButton = screen.getByText("Nope")  
    const likeButton = screen.getByText("Like")  

    expect(nopeButton).toBeInTheDocument()
    expect(likeButton).toBeInTheDocument()
})

test("test if the image renders correctly", async () => {
    await act(() => {
        render(<Home/>)
    })
    const imageElement = screen.getByTestId("dog-image")  
    
        
        expect(imageElement).toBeInTheDocument()
        expect(imageElement.src).toEqual(TEST_URL)
})












